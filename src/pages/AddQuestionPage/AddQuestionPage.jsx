import { Button } from '../../components/Button';
import cls from './AddQuestionPage.module.css';

export const AddQuestionPage = () => {
  return (
    <>
        <h1 className={cls.formTitle}>Add New Question</h1>
        <div className={cls.formContainer}>
            <form action="" className={cls.form}>
                <div className={cls.formControl}>
                    <label htmlFor="questionField">Question:</label>
                    <textarea 
                        defaultValue={"defaultValue"} 
                        name="question" 
                        id="questionField" 
                        cols="30" 
                        rows="2" 
                        required 
                        placeholder="Please add new question">
                    </textarea>
                </div>

                <div className={cls.formControl}>
                    <label htmlFor="answerField">Short answer:</label>
                    <textarea 
                        defaultValue={"defaultValue"} 
                        name="answer" 
                        id="answerField" 
                        cols="30" 
                        rows="2" 
                        required 
                        placeholder="Please add a short answer">
                    </textarea>
                </div>

                <div className={cls.formControl}>
                    <label htmlFor="descriptionField">Description:</label>
                    <textarea 
                        defaultValue={"defaultValue"} 
                        name="description" 
                        id="descriptionField" 
                        cols="30" 
                        rows="5" 
                        required 
                        placeholder="Please add a full description">
                    </textarea>
                </div>

                <div className={cls.formControl}>
                    <label htmlFor="resourcesField">Resources:</label>
                    <textarea 
                        defaultValue={"defaultValue"} 
                        name="resources" 
                        id="resourcesField" 
                        cols="30" 
                        rows="2" 
                        required 
                        placeholder="Please add resources separated by commas">
                    </textarea>
                </div>
                <div className={cls.formControl}>
                    <label htmlFor="levelField">Level:</label>
                    <select name="level" id="levelField" defaultValue={"defaultValue"}>
                        <option value="" disabled>Question level</option>
                        <hr />
                        <option value="1">1 - easiest</option>
                        <option value="2">2 - medium</option>
                        <option value="3">3 - hardest</option>
                    </select>
                </div>

                <label htmlFor="clearFormField" className={cls.clearFormControl}>
                    <input type="checkbox" className={cls.checkbox} name='clearForm' id='clearFormField' defaultValue={true} />
                    <span>Clear form after submitting?</span>
                </label>

                <Button>Add Question</Button>
            </form>
        </div>

    </>
  );
};
