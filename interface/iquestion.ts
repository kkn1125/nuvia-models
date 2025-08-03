import { DataType } from '@share/enums/data-type';
import { InputType } from '@share/enums/input-type';
import { QuestionType } from '@share/enums/question-type';

export interface IQuestionOption {
  id: number;
  label: string;
}

export abstract class IQuestion {
  id!: number;
  title!: string;
  description!: string;
  inputType!: InputType;
  dataType!: DataType;
  isRequired!: boolean;
  options: IQuestionOption[] = [];
  answers: Map<number, string> = new Map();
  isAnswered?: boolean = false;

  constructor(title: string, inputType: InputType, dataType: DataType, isRequired: boolean = true, options?: IQuestionOption[]) {
    this.title = title;
    this.inputType = inputType;
    this.dataType = dataType;
    this.isRequired = isRequired;
    if (options) this.options = options;
  }
}

export interface IQuestionWithoutId extends Omit<IQuestion, 'id' | 'options'> {
  options: Omit<IQuestionOption, 'id'>[];
}

export class IQuestionShortText extends IQuestion {
  inputType = QuestionType.InputType.ShortText;
}

export class IQuestionLongText extends IQuestion {
  inputType = QuestionType.InputType.LongText;
}

export class IQuestionSingleChoice extends IQuestion {
  inputType = QuestionType.InputType.SingleChoice;
}

export class IQuestionMultipleChoice extends IQuestion {
  inputType = QuestionType.InputType.MultipleChoice;
}

export type AllQuestion = IQuestion | IQuestionShortText | IQuestionLongText | IQuestionSingleChoice | IQuestionMultipleChoice;
