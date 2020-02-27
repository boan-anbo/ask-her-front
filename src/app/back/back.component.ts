import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Entry, Question, UploadAnswer} from '../main/entry.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';
import {analyzeFileForInjectables} from '@angular/compiler';


@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  public allUploadedAnswers: UploadAnswer[] = [];
  newUploads: number;
  public allUploadedQuestions: string[] = [];
  public getQuestionSubscription: Subscription;

  constructor(private dataService: DataService, private snackbar: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadAllUploadedAnswers();
    // console.log(this.allUploadedAnswers);
  }

  async loadAllUploadedAnswers() {
    this.allUploadedAnswers = [];
    this.dataService.getAllUpload().subscribe((data: []) => {
      console.log(data)

      data.forEach((value: UploadAnswer, index: number) => {
        this.allUploadedAnswers[index] = value;
        this.GetQuestionById(value.questionId, index);
      });
    });
  }

  private GetQuestionById(questionId: string, answerIndex: number) {
    this.getQuestionSubscription = this.dataService.FindOneEntryById(questionId).subscribe((data: Entry) => {
    this.allUploadedAnswers[answerIndex].answer.message = '问题: ' + data.question.text + '  |  回答：' + this.allUploadedAnswers[answerIndex].answer.message;
    console.log(data);

    });
  }


  async approveUploadedAnswer(item: UploadAnswer) {
    this.dataService.approveUploadedAnswer(item._id).subscribe((data) => {
      // console.log(data);
      this.loadAllUploadedAnswers();
      this.snackbar.open(`Answer Approved: ${item.answer?.message}`, '', {duration: 2000});

    });
  }


  async deleteUploadedAnswer(item: UploadAnswer) {
      if (window.confirm(`确定要删除吗（可按回车键确认）?\n ${item.answer?.message}`)) {
        this.dataService.deleteUploadedAnswer(item._id).subscribe((data) => {
          // console.log(data);
          this.loadAllUploadedAnswers();
        });
        this.snackbar.open(`Answer Deleted: ${item.answer?.message}`, 'OK', {duration: 2000});
      }
    }


}
