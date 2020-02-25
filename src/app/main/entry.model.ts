export class Entry {
  constructor() {
    this.question = {
      text: '',
      authorId: '',
      heard: 0,
    };
    this.answers = [
      new Answer()
    ];
  }
  _id: string;
  question: Question;
  answers: Answer[];
}

export class Question {
  text: string;
  authorId: string;
  heard: number;
}

export class Answer {
  constructor(message = '', authorId = '') {
    this.message = message;
    this.authorId = authorId;
    this.upvote = 0;
    }

  answerId: string;
  message: string;
  authorId: string;
  upvote: number;
}

export class UploadAnswer {
  _id: string;
  questionId: string;
  answer: {
    message: string;
    authorId: string;
    upvote: number;
  };
}

export class EntryCollection {
  entries: Entry[];
}


