// import cls from './Homepage.module.css';
import { API_URL } from '../../constants';
import { useState, useEffect } from 'react';

import { QuestionCardList } from '../../components/QuestionCardList/QuestionCardList';
import { Loader } from '../../components/Loader';


export const Homepage = () => {
    const [questions, setQuestions] = useState([]); //делаем состояние 
    const getQuestions = async () => {
        try {
            const response = await fetch(`${API_URL}/react`); //получили урл
            const questions = await response.json();//форматируем json в обычный объект
            setQuestions(questions); //после того как questions готовы, вызываем функцию которая обновляет состояние
            console.log("questions", questions);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getQuestions();
    }, []) //в useEffect 1 аргумент коллбек функция, а 2й это массив зависимостей

    return (
        <>
            <Loader />
            <QuestionCardList cards={questions} />
        </>
    );
};
