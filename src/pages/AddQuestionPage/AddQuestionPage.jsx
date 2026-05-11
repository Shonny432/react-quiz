import { useActionState } from 'react';
import { Button } from '../../components/Button';
import cls from './AddQuestionPage.module.css';
import { delayFn } from '../../helpers/delayFn';
import { toast } from 'react-toastify';
import { API_URL } from '../../constants';

const createCardAction = async (_prevState, formData) => { 
    try {
        await delayFn();
        console.log("formData", Object.fromEntries(formData));
        console.log("question", formData.get("question"));

        const newQuestion = Object.fromEntries(formData);
        const resources = newQuestion.resources.trim();
        const isClearForm = newQuestion.clearForm; // можно также сделать через formData.get("clearForm");

        const response = await fetch(`${API_URL}/react`, { //добавляем новый вопрос через нативный JS fetch методом POST
            method:"POST",
            body: JSON.stringify({
                question: newQuestion.question,
                answer: newQuestion.answer,
                description: newQuestion.description, 
                resources: resources.length ? resources.split(",") : [],
                level: Number(newQuestion.level), //переводим в число
                completed:false,
                editDate: undefined
            })
        })

        if(!response.ok) {
            throw new Error(response.statusText);
        } //проверка на то если запрос не выполнился

        const question = response.json();
        toast.success("New question was successfully created");

        return isClearForm ? {} : question; 
    } catch (error) {
        toast.error(error.message);
        return {};
    }
} //_prevState - подчеркивание означает что аргумент в данном случае не обязательный

export const AddQuestionPage = () => {

    const [formState, dispatchAction, isPending] = useActionState(createCardAction, { clearForm: true});

    return (
        <>
            <h1 className={cls.formTitle}>Add New Question</h1>
            <div className={cls.formContainer}>
                <form action={dispatchAction} className={cls.form}>
                    <div className={cls.formControl}>
                        <label htmlFor="questionField">Question:</label>
                        <textarea 
                            defaultValue={formState.question} 
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
                            defaultValue={formState.answer} 
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
                            defaultValue={formState.description} 
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
                            defaultValue={formState.resources} 
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
                        <select name="level" id="levelField" defaultValue={formState.level}>
                            <option value="" disabled>Question level</option>
                            <hr />
                            <option value="1">1 - easiest</option>
                            <option value="2">2 - medium</option>
                            <option value="3">3 - hardest</option>
                        </select>
                    </div>

                    <label htmlFor="clearFormField" className={cls.clearFormControl}>
                        <input type="checkbox" className={cls.checkbox} name='clearForm' id='clearFormField' defaultChecked={formState.clearForm} />
                        <span>Clear form after submitting?</span>
                    </label>

                    <Button isDisabled={isPending}>Add Question</Button>
                </form>
            </div>

        </>
    );
};
