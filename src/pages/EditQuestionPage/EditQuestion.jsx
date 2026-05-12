import { useActionState } from 'react';
import { Loader } from '../../components/Loader';
import cls from './EditQuestionPage.module.css';
import { QuestionForm } from '../../components/QuestionForm/QuestionForm';
import { delayFn } from '../../helpers/delayFn';
import { API_URL } from '../../constants';
import { toast } from 'react-toastify';
import { dateFormat } from '../../helpers/dateFormat';

const editCardAction = async (_prevState, formData) => { 
    try {
        await delayFn();
        console.log("formData", Object.fromEntries(formData));
        console.log("question", formData.get("question"));

        const newQuestion = Object.fromEntries(formData);
        const resources = newQuestion.resources.trim();
        const questionId = newQuestion.questionId;
        const isClearForm = newQuestion.clearForm; // можно также сделать через formData.get("clearForm");

        const response = await fetch(`${API_URL}/react/${questionId}`, { //добавляем новый вопрос через нативный JS fetch методом POST
            method:"PATCH",
            body: JSON.stringify({
                question: newQuestion.question,
                answer: newQuestion.answer,
                description: newQuestion.description, 
                resources: resources.length ? resources.split(",") : [],
                level: Number(newQuestion.level), //переводим в число
                completed:false,
                editDate: dateFormat(new Date()),
            })
        })

        if(!response.ok) {
            throw new Error(response.statusText);
        } //проверка на то если запрос не выполнился

        const question = response.json();
        toast.success("New question is edited successfully");

        return isClearForm ? {} : question; 
    } catch (error) {
        toast.error(error.message);
        return {};
    }
}

export const EditQuestion = ({ initialState = {} }) => {
    const [formState, dispatchAction, isPending] = useActionState(editCardAction, { ...initialState, clearForm: false});
  
    return (
        <>
            {isPending && <Loaderoader />}
            <h1 className={cls.formTitle}>Edit Question</h1>
            <div className={cls.formContainer}>
                <QuestionForm formAction={dispatchAction} state={formState} isPending={isPending} submitBtnText="Edit Question" />
            </div>

        </>
    );
};
