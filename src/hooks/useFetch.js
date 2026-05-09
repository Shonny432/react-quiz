import { useState } from "react";
import { delayFn } from "../helpers/delayFn";
import { toast } from "react-toastify";

export const useFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchFn = async (arg) => {
        try {
            setError("");
            setIsLoading(true);
            await delayFn(); //добавляем await потому что функция возвращает промис
            const response = await callback(arg); //получили урл
            
            return response;
        } catch(error) {
            setError(error.message);
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetchFn, isLoading, error];
}