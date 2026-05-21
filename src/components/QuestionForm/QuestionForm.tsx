import type { FC } from 'react';
import { Button } from '../Button';
import cls from './QuestionForm.module.css';
import type { IQuestionCardState } from '../../types/global.types';

export interface IQuestionFormProps {
    formAction: any;
    cardState: IQuestionCardState;
    isPending: boolean;
    submitBtnText: string;
}

export const QuestionForm: FC<IQuestionFormProps> = ({ formAction, cardState, isPending, submitBtnText }) => {
  return (
        <form action={formAction} className={cls.form}>
            <input type="text" name="questionId" hidden defaultValue={cardState.id} /> {/* добавляем скрытый инпут чтобы получить id, так как его нет в форме */}
            
            <div className={cls.formControl}>
                <label htmlFor="questionField">Question:</label>
                <textarea 
                    defaultValue={cardState.question} 
                    name="question" 
                    id="questionField" 
                    cols={30} 
                    rows={2} 
                    required 
                    placeholder="Please add new question">
                </textarea>
            </div>

            <div className={cls.formControl}>
                <label htmlFor="answerField">Short answer:</label>
                <textarea 
                    defaultValue={cardState.answer} 
                    name="answer" 
                    id="answerField" 
                    cols={30}
                    rows={2} 
                    required 
                    placeholder="Please add a short answer">
                </textarea>
            </div>

            <div className={cls.formControl}>
                <label htmlFor="descriptionField">Description:</label>
                <textarea 
                    defaultValue={cardState.description} 
                    name="description" 
                    id="descriptionField" 
                    cols={30}
                    rows={5} 
                    required 
                    placeholder="Please add a full description">
                </textarea>
            </div>

            <div className={cls.formControl}>
                <label htmlFor="resourcesField">Resources:</label>
                <textarea 
                    defaultValue={cardState.resources} 
                    name="resources" 
                    id="resourcesField" 
                    cols={30} 
                    rows={2} 
                    placeholder="Please add resources separated by commas">
                </textarea>
            </div>
            <div className={cls.formControl}>
                <label htmlFor="levelField">Level:</label>
                <select name="level" id="levelField" defaultValue={cardState.level}>
                    <option value="" disabled>Question level</option>
                    <hr />
                    <option value="1">1 - easiest</option>
                    <option value="2">2 - medium</option>
                    <option value="3">3 - hardest</option>
                </select>
            </div>

            <label htmlFor="clearFormField" className={cls.clearFormControl}>
                <input type="checkbox" className={cls.checkbox} name='clearForm' id='clearFormField' defaultChecked={cardState.clearForm} />
                <span>Clear form after submitting?</span>
            </label>

            <Button isDisabled={isPending}>{submitBtnText}</Button>
        </form>
  );
};
