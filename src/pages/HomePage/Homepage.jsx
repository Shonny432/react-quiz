import cls from './Homepage.module.css';
import { API_URL } from '../../constants';
import { useState, useEffect, useRef, useMemo } from 'react';

import { QuestionCardList } from '../../components/QuestionCardList/QuestionCardList';
import { Loader } from '../../components/Loader';
import { useFetch } from '../../hooks/useFetch';
import { SearchInput } from '../../components/SearchInput';


export const Homepage = () => {
    const [questions, setQuestions] = useState([]); //делаем состояние 

    const [searchValue, setSearchValue] = useState("");
    const [sortSelectValue, setSortSelectValue] = useState("");

    const [getQuestions, isLoading, error] = useFetch(async (url) => {
        const response = await fetch(`${API_URL}/${url}`); //получили урл
        const questions = await response.json();//форматируем json в обычный объект

        setQuestions(questions);
        return questions;
    });

    const searchCards = useMemo(() =>{
        console.log("re-render");
        return questions.filter((d) => d.question.toLowerCase().includes(searchValue.trim().toLowerCase()));
    }, [questions, searchValue])
    
    

    // const inputRef = useRef();

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
        getQuestions(`react?${sortSelectValue}`);
    }, [sortSelectValue]) //в useEffect 1 аргумент коллбек функция, а 2й это массив зависимостей

    // const refTestHandler = () => {
    //     console.dir(inputRef.current.value);
    // }

    const onSearchChangeHandler = (evt) => {
        console.log(evt.target.value);
        setSearchValue(evt.target.value);
    }

    const onSortSelectChangeHandler = (evt) => {
        setSortSelectValue(evt.target.value);
    }

    return (
        <>
            {/* <input type="text" ref={inputRef} />
            <button onClick={refTestHandler}>get ref</button> */}
            <div className={cls.controlsContainer}>
                <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
                <select name="" id="" value={sortSelectValue} onChange={onSortSelectChangeHandler} className={cls.select}>
                    <option value="">sort by</option>
                    <hr />
                    <option value="_sort=level">level ASC</option>
                    <option value="_sort=-level">level DESC</option>
                    <option value="_sort=completed">completed ASC</option>
                    <option value="_sort=-completed">completed DESC</option>
                </select>
            </div>
            
            {isLoading && <Loader />} 
            {error && <p>{error}</p>}
            <QuestionCardList cards={searchCards} />
            {searchCards.length === 0 && <p className={cls.noCardsInfo}>No cards...</p>}
        </>
    );
};
