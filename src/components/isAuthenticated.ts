// Компонент для проверки наличия токена
import {getTokenFromLocalStorage} from "../helpers/localstorage";

export const isAuthenticated = () => {
    // Проверка наличия токена
    const token = getTokenFromLocalStorage();
    return !!token;
};