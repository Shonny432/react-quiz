import cls from './Homepage.module.css';
import { API_URL } from '../../constants';
import { useState, useEffect, useRef, useMemo } from 'react';

import { QuestionCardList } from '../../components/QuestionCardList/QuestionCardList';
import { Loader } from '../../components/Loader';
import { useFetch } from '../../hooks/useFetch';
import { SearchInput } from '../../components/SearchInput';
import { Button } from '../../components/Button';

const DEFAULT_PER_PAGE = 10;

export const Homepage = () => {
    const [questions, setQuestions] = useState({}); //делаем состояние 

    const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${DEFAULT_PER_PAGE}`);

    const [searchValue, setSearchValue] = useState("");
    const [sortSelectValue, setSortSelectValue] = useState("");
    const [countSelectValue, setCountSelectValue] = useState("");
    

    const controlsContainerRef = useRef();

    const getActivePageNumber = () => {
        return questions.next === null ? questions.last : questions.next - 1
    }

    const [getQuestions, isLoading, error] = useFetch(async (url) => {
        const response = await fetch(`${API_URL}/${url}`); //получили урл
        const questions = await response.json();//форматируем json в обычный объект

        setQuestions(questions);
        return questions;
    });

    const searchCards = useMemo(() =>{
        // console.log("re-render");
        if (questions?.data) {
            if (searchValue.trim()) {
               return questions.data.filter((d) => d.question.toLowerCase().includes(searchValue.trim().toLowerCase())); 
            } else {
                return questions.data;
            }
        } 
        return [];
        
    }, [questions, searchValue]);


    const pagination = useMemo(() =>{
        const totalCardsCount = questions?.pages || 0;

        return Array(totalCardsCount).fill(0).map((_, i) => i + 1)
        
    }, [questions]);
    
    

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
        // getQuestions(`react?${sortSelectValue}`);
        getQuestions(`react${searchParams}`);
    }, [searchParams]) //в useEffect 1 аргумент коллбек функция, а 2й это массив зависимостей

    // const refTestHandler = () => {
    //     console.dir(inputRef.current.value);
    // }

    const onSearchChangeHandler = (evt) => {
        console.log(evt.target.value);
        setSearchValue(evt.target.value);
    }

    const onSortSelectChangeHandler = (evt) => {
        setSortSelectValue(evt.target.value);

        setSearchParams(`?_page=1&_per_page=${countSelectValue}&${evt.target.value}`); //мы не дожидаемся пока обновиться состояние выше, потому что если мы возьмем его в таком виде ?_page=1&per_page=${DEFAULT_PER_PAGE}&${sortSelectValue} мы получим старое потому что оно обновиться не успеет
    }

   

    const paginationHandler = (evt) => {
        if (evt.target.tagName === "BUTTON") {
            setSearchParams(`?_page=${evt.target.textContent}&_per_page=${countSelectValue}&${sortSelectValue}`);

            controlsContainerRef.current.scrollIntoView({behavior: "smooth"});
        }   
    }

     const onCountSelectChangeHandler = (evt) => {
        setSearchParams(`?_page=1&_per_page=${evt.target.value}&${sortSelectValue}`);
        setCountSelectValue(evt.target.value);

    }

    

    return (
        <>
            {/* <input type="text" ref={inputRef} />
            <button onClick={refTestHandler}>get ref</button> */}
            <div className={cls.controlsContainer} ref={controlsContainerRef}>
                <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
                <select name="" id="" value={sortSelectValue} onChange={onSortSelectChangeHandler} className={cls.select}>
                    <option value="">sort by</option>
                    <hr />
                    <option value="_sort=level">level ASC</option>
                    <option value="_sort=-level">level DESC</option>
                    <option value="_sort=completed">completed ASC</option>
                    <option value="_sort=-completed">completed DESC</option>
                </select>

                <select name="" id="" value={countSelectValue} onChange={onCountSelectChangeHandler} className={cls.select}>
                    <option value="" disabled>count</option>
                    <hr />
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            
            {isLoading && <Loader />} 
            {error && <p>{error}</p>}
            <QuestionCardList cards={searchCards} />


            {searchCards.length === 0 ? (
                <p className={cls.noCardsInfo}>No cards...</p>
            ) : (
                pagination.length > 1 && (
                    <div className={cls.paginationContainer} onClick={paginationHandler}>
                    {pagination.map((value) => {
                        return <Button key={value} isActive={value === getActivePageNumber()}>{value}</Button>
                    })}
                </div>
                )
            )}

            
        </>
    );
};
