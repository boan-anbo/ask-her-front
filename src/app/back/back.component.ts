import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {UploadAnswer} from '../main/entry.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  public allUploadedAnswers;
  newUploads: number;

  constructor(private dataService: DataService, private snackbar: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadAllUploadedAnswers();
    // console.log(this.allUploadedAnswers);
  }

  async loadAllUploadedAnswers() {
    this.dataService.getAllUpload().subscribe((data) => {
      // console.log(data)
      this.allUploadedAnswers = data;
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
