import { DataType } from '@share/enums/data-type';
import { QuestionType } from '@share/enums/question-type';

export interface IQuestionOption {
  id: number | null;
  idx: number;
  label: string;
  description?: string | null;
  sequence: number;
}

export abstract class IQuestion {
  id!: number | null;
  idx!: number;
  title!: string;
  description!: string | null;
  questionType!: QuestionType;
  dataType!: DataType;
  isRequired!: boolean;
  questionOptions: IQuestionOption[] = [];
  questionAnswers: Map<number, { optionId: number | null; value: string | number | null }> = new Map();
  isAnswered?: boolean = false;
  sequence!: number;

  constructor(
    title: string,
    questionType: QuestionType,
    dataType: DataType,
    isRequired: boolean = true,
    options?: IQuestionOption[],
    sequence: number = 0,
  ) {
    this.title = title;
    this.questionType = questionType;
    this.dataType = dataType;
    this.isRequired = isRequired;
    if (options) this.questionOptions = options;
    this.sequence = sequence;
  }
}

export interface IQuestionWithoutId extends Omit<IQuestion, 'id' | 'questionOptions'> {
  questionOptions: Omit<IQuestionOption, 'id' | 'idx'>[];
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
