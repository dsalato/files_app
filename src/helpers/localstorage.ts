export const getTokenFromLocalStorage = () => {
    const data = localStorage.getItem('token');
    const token: string = data ? JSON.parse(data) : '';
    return token;
}

export const setTokenFromLocalStorage = (key: string, token: string): void => {
    localStorage.setItem(key, JSON.stringify(token));
};

export const removeTokenFromLocalStorage = (key:string,): void => {
    localStorage.removeItem(key);
}