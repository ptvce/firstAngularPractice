import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IComment } from '../interfaces/icomment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comments: IComment[] = [];
  @ViewChild("textAreaValue") comm: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    let comment: IComment = {
      comment: this.comm.nativeElement.value,
      like: 0,
      dislike: 0,
      star: 0,
      numberOfReviews: 0
    };
   
    this.comments.push(comment);
  }

  reviewsCount(c: IComment, ratingInput: HTMLInputElement) {
    c.numberOfReviews ++;
    c.star += parseInt(ratingInput.value);
  }

  commentLike(c: IComment) {
    c.like++;
  }

  commentDislike(c: IComment) {
    c.dislike++;
  }
}
