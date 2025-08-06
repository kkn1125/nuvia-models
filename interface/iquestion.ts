import { DataType } from '@share/enums/data-type';
import { QuestionType } from '@share/enums/question-type';

export interface IQuestionOption {
  id: number;
  label: string;
}

export abstract class IQuestion {
  id!: number;
  title!: string;
  description!: string;
  questionType!: QuestionType;
  dataType!: DataType;
  isRequired!: boolean;
  options: IQuestionOption[] = [];
  answers: Map<number, string> = new Map();
  isAnswered?: boolean = false;

  constructor(title: string, questionType: QuestionType, dataType: DataType, isRequired: boolean = true, options?: IQuestionOption[]) {
    this.title = title;
    this.questionType = questionType;
    this.dataType = dataType;
    this.isRequired = isRequired;
    if (options) this.options = options;
  }
}

export interface IQuestionWithoutId extends Omit<IQuestion, 'id' | 'options'> {
  options: Omit<IQuestionOption, 'id'>[];
}

export class IQuestionShortText extends IQuestion {
  questionType = QuestionType.ShortText;
}

export class IQuestionLongText extends IQuestion {
  questionType = QuestionType.LongText;
}

export class IQuestionSingleChoice extends IQuestion {
  questionType = QuestionType.SingleChoice;
}

export class IQuestionMultipleChoice extends IQuestion {
  questionType = QuestionType.MultipleChoice;
}

export type AllQuestion = IQuestion | IQuestionShortText | IQuestionLongText | IQuestionSingleChoice | IQuestionMultipleChoice;
