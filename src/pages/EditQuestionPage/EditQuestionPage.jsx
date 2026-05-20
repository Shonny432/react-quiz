import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { API_URL } from '../../constants/global.constants';
import { EditQuestion } from './EditQuestion';

const EditQuestionPage = () => {
    const {id} = useParams(); //вытягиваем id с помощью хука useParams и далее использем его для запроса на бекенд
    
    const [question, setQuestion] = useState(null);

    const [fetchQuestion, isQuestionLoading] = useFetch(async () => {
        const response = await fetch(`${API_URL}/react/${id}`); //получили урл
        const data = await response.json();//форматируем json в обычный объект

        setQuestion(data);
    });

    useEffect(() => {
        fetchQuestion();
    }, []);

    return (
        <>
            {isQuestionLoading && <Loader />}
            {question && <EditQuestion initialState={question} />}
        </>
    );
};

export default EditQuestionPage;