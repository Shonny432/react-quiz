import { useActionState } from 'react';
import cls from './AddQuestionPage.module.css';
import { delayFn } from '../../helpers/delayFn';
import { toast } from 'react-toastify';
import { API_URL } from '../../constants';
import { Loader } from '../../components/Loader';
import { QuestionForm } from '../../components/QuestionForm/QuestionForm';

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

const AddQuestionPage = () => {

    const [formState, dispatchAction, isPending] = useActionState(createCardAction, { clearForm: true});

    return (
        <>
            {isPending && <Loader />}
            <h1 className={cls.formTitle}>Add New Question</h1>
            <div className={cls.formContainer}>
                <QuestionForm formAction={dispatchAction} state={formState} isPending={isPending} submitBtnText="Add Question" />
            </div>

        </>
    );
};

export default AddQuestionPage;