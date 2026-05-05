import { useState } from "react";
import { delayFn } from "../helpers/delayFn";

export const useFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchFn = async (arg) => {
        try {
            setError("");
            setIsLoading(true);
            await delayFn(); //добавляем await потому что функция возвращает промис
            const response = callback(arg); //получили урл
            
            return response;
        } catch(error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetchFn, isLoading, error];
}