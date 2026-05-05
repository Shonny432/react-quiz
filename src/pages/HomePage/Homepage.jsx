// import cls from './Homepage.module.css';
import { API_URL } from '../../constants';
import { useState, useEffect } from 'react';

import { QuestionCardList } from '../../components/QuestionCardList/QuestionCardList';
import { Loader } from '../../components/Loader';
import { useFetch } from '../../hooks/useFetch';


export const Homepage = () => {
    const [questions, setQuestions] = useState([]); //делаем состояние 

    const [getQuestions, isLoading, error] = useFetch(async (url) => {
        const response = await fetch(`${API_URL}/${url}`); //получили урл
        const questions = await response.json();//форматируем json в обычный объект

        setQuestions(questions);
        return questions;
    });

    // const getQuestions = async () => {
    //     try {
    //         setIsLoading(true);
    //         await delayFn(); //добавляем await потому что функция возвращает промис
    //         const response = await fetch(`${API_URL}/react`); //получили урл
    //         const questions = await response.json();//форматируем json в обычный объект
    //         setQuestions(questions); //после того как questions готовы, вызываем функцию которая обновляет состояние
    //         console.log("questions", questions);
    //     } catch(error) {
    //         console.error(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    useEffect(() => {
        getQuestions("react");
    }, []) //в useEffect 1 аргумент коллбек функция, а 2й это массив зависимостей

    return (
        <>
           {isLoading && <Loader />} 
           {error && <p>{error}</p>}
            <QuestionCardList cards={questions} />
        </>
    );
};
