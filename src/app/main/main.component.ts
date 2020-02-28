import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Answer, Entry} from './entry.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subject, Subscription} from 'rxjs';
import {SpeechService} from '../speech.service';
import {throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  public totalEntryCount: number;


  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private snackbar: MatSnackBar,
              private speechService: SpeechService) {
  }
  @ViewChild('endPoint', {static: false}) endPoint: ElementRef;

  public currentEntry: Entry = new Entry();
  // public currentAnswer: Answer = new Answer();
  private preLoadedEntry: Entry;
  public answerPointer = 0;
  // status toggle
  public writingAnswer = false;
  public addingQuestionModeOn = false;
  public historyModeOn = false;
  public helpOpen = false;
  //
  public inputForm: FormGroup;
  public inputSubmitLoading = false;
  public questionInputForm: FormGroup;
  public questionInputSubmitLoading = false;


  public alreadyHeard = false;
  public alreadyUpvoted = {};
  public loadingEntry = false;
  private upvoteSubscription: Subscription;
  private loadingSubscription: Subscription;
  // to prevent loading questions too frequently
  private preLoadQuestionSubject: Subject<any> = new Subject();

  // tslint:disable-next-line:max-line-length
  private uploadAnswerSubscription: Subscription;
  private uploadQuestionSubscription: Subscription;
  private iHeardThatSubscription: Subscription;
  private preloadingSubscription: Subscription;
  private entryStremSubscription: Subscription;
  private currentEntryPool: Entry[] = [];
  private historyEntryPool: Entry[] = [];
  // notice I'm unshift past entries into the array. So the last element is the oldest.
  private historyQuestionPointer = 0;
  private _temporaryCurrentEntry: Entry = new Entry();

  // async uploadAnswer(questionId, message, authorId) {
  //   this.dataService.uploadAnswer(questionId, message, authorId).subscribe((data) => {
  //     console.log(data);
  //   });
  // }



  ngOnInit(): void {
    this.LoadRandomQuestionAndPushToPool();
    this.InitializeQuestion();
    this.InitializeInputForm();
    this.InitializeQuestionInputForm();
    this.GetEntryAnswerCount();
  }

  ngAfterViewInit(): void {
    this.KeepEntryPoolFilled();
    // this.JumpToEnd();
  }

  ngOnDestroy(): void {
    this.preLoadQuestionSubject.unsubscribe();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // console.log(event);
    if (!this.writingAnswer && !this.addingQuestionModeOn) {
      switch (event.code) {
        case 'ArrowLeft':
          if (!this.IsFirstAnswer()) {
            this.LeftArrow();
          }
          break;
        case 'ArrowRight':
          if (!this.IsLastAnswer()) {
            this.RightArrow();
          }
          break;
        case 'Space':
          this.NextQuestion();
          break;
        case 'ArrowUp':
          if (!this.ReachedEndOfHistory()) {
            this.PreviousQuestion();
          }
          break;
        case 'ArrowDown':
          if (this.historyModeOn) {
            this.SubsequentQuestion();
          }
          break;
      }
    }
  }


  public setCurrentEntry(entryToUse: Entry): void {
    if (!this.currentEntry) {
      this.currentEntry = new Entry();
    }
    this.currentEntry = entryToUse;
  }


  IHeardThat() {
    if (this.alreadyHeard === false) {
    this.currentEntry.question.heard += 1;
    this.iHeardThatSubscription = this.dataService.UpvoteQuestion(this.currentEntry._id).subscribe((data) =>
        // console.log(data)
      console.log('Like')
      );
    this.alreadyHeard = true;
    }
  }

  LetMeAnswer() {
    this.writingAnswer = true;
    this.addingQuestionModeOn = false;
  }

  LeftArrow() {
    if (this.answerPointer > 0) {
      this.answerPointer -= 1;
      // this.LoadAnswer();
      this.ReadAnswer();
    }
  }

  RightArrow() {
    if (this.answerPointer < this.currentEntry.answers.length - 1) {
      this.answerPointer += 1;
      this.ReadAnswer();
      // this.LoadAnswer();
    }
  }

  IsLastAnswer(): boolean {
    return (this.answerPointer === this.currentEntry.answers.length - 1) || this.currentEntry.answers.length === 0 ? true : false;
  }

  IsFirstAnswer(): boolean {
    return (this.answerPointer === 0) ? true : false;
  }

  public ExitWritingMode(): void {
    this.writingAnswer = false;
    this.inputSubmitLoading = false;
  }

  public ExitAddQuestionMode(): void {
    this.addingQuestionModeOn = false;
    this.questionInputSubmitLoading;
  }

  public IsThereAnswer(): boolean {
    return (this.currentEntry.answers.length === 0 || !this.currentEntry.question.text) ? false : true;
  }
  private InitializeQuestion() {
    this.alreadyHeard = false;
    this.ResetAnswerPointer();
    this.InitializeAnswerUpvote();
  }

  private InitializeAnswerUpvote() {
    this.alreadyUpvoted = [];
  }
  private ResetAnswerPointer() {
    this.answerPointer = 0;
  }
  private InitializeInputForm() {
    this.inputForm = this.fb.group({
      message: '',
      authorId: '江山娇'
    });
    this.inputSubmitLoading = false;

  }

  private InitializeQuestionInputForm() {
      this.questionInputForm = this.fb.group({
        text: '江山娇，',
        authorId: ''
      });
      this.questionInputSubmitLoading = false;
  }

  public IUpVoteThat() {
    if (!this.alreadyUpvoted[this.answerPointer.toString()]) {
      this.currentEntry.answers[this.answerPointer].upvote += 1;
      this.upvoteSubscription = this.dataService.UpvoteAnswer(this.currentEntry.answers[this.answerPointer].answerId).subscribe((data) =>
        // console.log(data)
        console.log('Loading')
      );
      this.alreadyUpvoted[this.answerPointer.toString()] = true;
    }
  }
  public addNewAnswer(message: string, authorId: string) {
    const newAnswer = new Answer(message, authorId);
    this.currentEntry.answers.unshift(newAnswer);
    this.ResetAnswerPointer();
    // this.LoadAnswer()
    // console.log(this.currentEntry.answers[0].message);
  }

    public NextQuestion() {
    // this.JumpToEnd();
    // if (this.speechModeOn) {
    //   this.speechService.cancelSpeech();
    // }
    this.ResetHistoryMode();
    this.SetCurrentEntryAndRefillEntryPoll();
    this.KeepEntryPoolFilled();
    this.InitializeQuestion();
    this.ResetButtons();
    }

    private ResetHistoryMode() {
    if (this.historyModeOn) {
    this.historyModeOn = false;
    this.historyQuestionPointer = 0;
    this.setCurrentEntry(this._temporaryCurrentEntry);
    }
    }
    public PreviousQuestion() {

    // if it's not in history mode yet, then start with 0
      if (this.historyEntryPool.length !== 0) {
        this.answerPointer = 0;
        if (!this.historyModeOn) {
          this._temporaryCurrentEntry = this.currentEntry;
          this.historyQuestionPointer = 0;
          this.setCurrentEntry(this.historyEntryPool[this.historyQuestionPointer]);
        } else {
          if (this.historyQuestionPointer < this.historyEntryPool.length - 1) {
            this.historyQuestionPointer += 1;
          }
          this.setCurrentEntry(this.historyEntryPool[this.historyQuestionPointer]);
          }
        this.historyModeOn = true;
      }
      this.ReadAnswer();
    }

    public ReachedEndOfHistory(): boolean {
      if (this.historyEntryPool.length === 0 || (this.historyModeOn === true) && this.historyQuestionPointer === this.historyEntryPool.length - 1 ) {
        return true;
      } else {
        return false;
      }
    }



    public SubsequentQuestion() {
      // console.log(this.historyEntryPool);
      // console.log(this.currentEntryPool);
      // console.log(this.currentEntry);

      if (this.historyModeOn === true) {
      this.answerPointer = 0;
      if (this.historyQuestionPointer === 0) {
        this.historyModeOn = false;
        this.setCurrentEntry(this._temporaryCurrentEntry);
      } else {
        this.historyQuestionPointer -= 1;
        this.setCurrentEntry(this.historyEntryPool[this.historyQuestionPointer]);
      }

      this.ReadAnswer();
    }

    }

    private MovePreToCurrentEntry() {
      this.setCurrentEntry(this.preLoadedEntry);
      this.preLoadedEntry = null;
      this.preLoadQuestionSubject.next();
    }

    private SetCurrentEntryAndRefillEntryPoll() {
    if (this.currentEntryPool) {
        // this.speechService.cancelSpeech();
        if (this.currentEntry.question.text) {
          this.historyEntryPool.unshift(this.currentEntry);
        }
        if (this.currentEntry?._id === this.currentEntryPool[0]._id) {
          this.currentEntryPool.shift();
        }
        this.setCurrentEntry(this.currentEntryPool[0]);
        this.ReadAnswer();
        this.currentEntryPool.shift();
    }
  }
    private KeepEntryPoolFilled() {
      if (this.currentEntryPool.length < 5) {
        for (let i = 0; i < 5 - this.currentEntryPool.length; i++) {
          this.LoadRandomQuestionAndPushToPool();
        }
        // this.loadingSubscription?.unsubscribe();
      }
    }
    private LoadRandomQuestionAndPushToPool() {
      this.loadingSubscription = this.dataService.getOneRandomEntry().subscribe((data) => {
        // console.log('Current', data);
        const entry: Entry = new Entry();
        Object.assign(entry, data);
        // this.setCurrentEntry(entry);
        this.currentEntryPool.push(entry);
        if (this.currentEntryPool.length === 1) {
          this.setCurrentEntry(entry);
        }
      });
    }

    private PreLoadRandomQuestion() {
      this.preloadingSubscription = this.dataService.getOneRandomEntry().subscribe((data) => {
        // console.log('Preload', data);
        const entry: Entry = new Entry();
        Object.assign(entry, data);
        this.preLoadedEntry = entry;
        this.preloadingSubscription?.unsubscribe();
      });
    }

    private UnsubscribeAll() {
      this.upvoteSubscription?.unsubscribe();
      this.loadingSubscription?.unsubscribe();
      this.uploadAnswerSubscription?.unsubscribe();
      this.uploadQuestionSubscription?.unsubscribe();
      this.preloadingSubscription?.unsubscribe();
    }
    private ResetButtons() {
      this.inputSubmitLoading = false;
    }


  public ToggleHelp() {
    this.helpOpen = !this.helpOpen;
  }

  private JumpToEnd() {
    this.endPoint?.nativeElement.scrollIntoView();

  }


  ToggleAddQuestionMode() {
    this.addingQuestionModeOn = !this.addingQuestionModeOn;
    if (this.addingQuestionModeOn === true) {
      this.writingAnswer = false;
      this.helpOpen = false;
    }
  }
  private ReadAnswer() {
    // if (this.speechModeOn) {
    //   this.speechService.cancelSpeech();
    //   this.speechService.sayThis(this.currentEntry.answers[this.answerPointer]?.message);
    // }
  }

  private CleanQuestionText(text: string): string {
    return text.replace(/^[江姜][山春][蛟娇矫姣较][\s,，:：!！]?/gm, '').trim();
  }

  async QuestionSubmitHandler() {
    this.questionInputSubmitLoading = true;
    const formValue = this.questionInputForm.value;
    // console.log(this.CleanQuestionText(formValue.text));
    // console.log(this.questionInputForm.value.authorId);
    this.InitializeQuestionInputForm();
    this.ExitAddQuestionMode();

    try {
      this.uploadQuestionSubscription = this.dataService.uploadQuestion(this.CleanQuestionText(formValue.text), formValue.authorId)
        .subscribe((data) => {
          // console.log(data);
          if (data) {
            this.snackbar.open('你的提问已收录', `稍后更新♥`, {duration: 4000});
            this.InitializeQuestionInputForm();
            this.ExitAddQuestionMode();
          } else {

          }
        });
    } catch (err) {
      // console.log(err);
    }
  }


  async submitHandler() {
    this.inputSubmitLoading = true;
    const formValue = this.inputForm.value;
    try {
      this.uploadAnswerSubscription = this.dataService.uploadAnswer(this.currentEntry._id, formValue.message, formValue.authorId)
        .subscribe((data) => {
          // console.log(data);
          if (data) {
            this.currentEntry.answers.push({ message: formValue.message, authorId: formValue.authorId, upvote: 0, answerId: '' });
            this.snackbar.open('你的回答已收录', `稍后更新♥`, {duration: 3000});
            this.InitializeInputForm();
            this.ExitWritingMode();
          } else {

          }
        });
    } catch (err) {
      // console.log(err);
    }
  }


  public IsTextEmpty(inputText: string): boolean {
    return this.CleanQuestionText(inputText).length === 0 ? true : false;
  }

  async GetEntryAnswerCount() {
    this.dataService.GetEntryCount().subscribe((data: string) => {
      this.totalEntryCount = parseInt(data);
    });
  }

}
