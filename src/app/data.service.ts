import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:variable-name
  // private _apiBase = 'http://167.172.212.141:4001'; // remote
  private _apiBase = 'https://www.askjiang.com'; // remote
  // private _apiBase = 'http://localhost:4001'; // local
  // tslint:disable-next-line:variable-name
  private _listAllUpload = '/uploadanswer/listall';
  // tslint:disable-next-line:variable-name
  private _deleteUploadedAnswer = '/uploadanswer/delete/'
  // tslint:disable-next-line:variable-name
  private _approveUploadedAnswer = '/uploadanswer/approve/'
  // tslint:disable-next-line:variable-name
  private _backEntry = '/entry/back/'
  // tslint:disable-next-line:variable-name
  private _listAllEntries = '/entry/listall'
  // tslint:disable-next-line:variable-name
  private _getRandomEntry = '/entry/find/random'
  // tslint:disable-next-line:variable-name
  private _uploadAnswer = '/uploadanswer/'
  // tslint:disable-next-line:variable-name
  private _upvoteAnswer = '/upvote/answer/'
  // tslint:disable-next-line:variable-name
  private _upvoteQuestion = '/upvote/question/'

  private UpVoteAnswerUrl(answerId: string): string {
    return this._apiBase + this._upvoteAnswer + answerId;
  }

  private UpvoteQuestionUrl(questionId: string): string {
    return this._apiBase + this._upvoteQuestion + questionId;
  }

  private uploadQuestionUrl(questionId: string): string {
    return this._apiBase + this._uploadAnswer + questionId;
  }
  public getAllUpload() {
    return this.http.get(this._apiBase + this._listAllUpload);
  }

  public deleteUploadedAnswer(id: string) {
    return this.http.get(this._apiBase + this._deleteUploadedAnswer + id);
  }


  public approveUploadedAnswer(id: any) {
    return this.http.get(this._apiBase + this._approveUploadedAnswer + id);
  }

  public checkAuth(id: string) {
    return this.http.get(this._apiBase + this._backEntry + id);
  }

  public getAllEntries() {
    return this.http.get(this._apiBase + this._listAllEntries);
  }

  public getOneRandomEntry() {
    return this.http.get(this._apiBase + this._getRandomEntry);
  }

  public uploadAnswer(questionId: string, message: string, authorId: string) {
    // console.log({message, authorId});
    return this.http.put(this.uploadQuestionUrl(questionId), {message, authorId});
  }

  public UpvoteAnswer(answerId: string) {
    return this.http.get(this.UpVoteAnswerUrl(answerId));
  }

  public UpvoteQuestion(questionId: string) {
    return this.http.get(this.UpvoteQuestionUrl(questionId));
  }


}
