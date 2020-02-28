import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:variable-name
  private _apiBase = 'http://167.172.212.141:4001'; // remote
  // private _apiBase = 'http://www.askjiang.com'; // remote
  // private _apiBase = 'http://localhost:4001'; // local
  // tslint:disable-next-line:variable-name

  private _getRandomEntry = '/entry/find/random'
  // tslint:disable-next-line:variable-name
  private _uploadAnswer = '/uploadanswer/'
  // tslint:disable-next-line:variable-name
  private _upvoteAnswer = '/upvote/answer/'
  // tslint:disable-next-line:variable-name
  private _upvoteQuestion = '/upvote/question/'
  // tslint:disable-next-line:variable-name
  private _findOneEntryById = '/entry/find/id/'
  private _uploadQuestion = '/uploadquestion/upload'
  // tslint:disable-next-line:variable-name
  private _entryCount = '/entry/count'



  private UpVoteAnswerUrl(answerId: string): string {
    return this._apiBase + this._upvoteAnswer + answerId;
  }

  private FindOneEntryByIdUrl(questionId: string) {
    return this._apiBase + this._findOneEntryById + questionId;
  }

  private UpvoteQuestionUrl(questionId: string): string {
    return this._apiBase + this._upvoteQuestion + questionId;
  }

  private uploadAnswerUrl(questionId: string): string {
    return this._apiBase + this._uploadAnswer + questionId;
  }







  public getOneRandomEntry() {
    return this.http.get(this._apiBase + this._getRandomEntry);
  }

  public uploadAnswer(answerId: string, message: string, authorId: string) {
    // console.log({message, authorId});
    return this.http.put(this.uploadAnswerUrl(answerId), {message, authorId});
  }

  public uploadQuestion(text: string, authorId: string) {
    // console.log({message, authorId});
    console.log(`I'm here`);
    console.log(this._apiBase + this._uploadQuestion)
    return this.http.put(this._apiBase + this._uploadQuestion, {text, authorId});
  }


  public UpvoteAnswer(answerId: string) {
    return this.http.get(this.UpVoteAnswerUrl(answerId));
  }

  public UpvoteQuestion(questionId: string) {
    return this.http.get(this.UpvoteQuestionUrl(questionId));
  }

  public FindOneEntryById(questionId: string) {
    return this.http.get(this.FindOneEntryByIdUrl(questionId));
  }

  public GetEntryCount() {
    return this.http.get(this._apiBase + this._entryCount);
  }

}
