export const delayFn = async (delay = 1000) => {
    return await new Promise((res) => setTimeout(res, 1000)); //Искусственная задержка 1 сек
}