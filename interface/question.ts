import { QuestionType } from '@models/enums/question-type';

export abstract class Question {
  title!: string;
  questionType!: QuestionType;
  required!: boolean;

  constructor(title: string, questionType: QuestionType, required: boolean) {
    this.title = title;
    this.questionType = questionType;
    this.required = required;
  }
}

export class QuestionShortText extends Question {
  questionType = QuestionType.ShortText;
}

export class QuestionLongText extends Question {
  questionType = QuestionType.LongText;
}

export class QuestionSingleChoice extends Question {
  questionType = QuestionType.SingleChoice;
}

export class QuestionMultipleChoice extends Question {
  questionType = QuestionType.MultipleChoice;
}
