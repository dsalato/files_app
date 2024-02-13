import axios from "axios";
import {getTokenFromLocalStorage} from "../helpers/localstorage";

const getTokenAsync = async () => {
    return await getTokenFromLocalStorage();
};

export const createInstance = async () => {
    const token = await getTokenAsync();

    const instance = axios.create({
        baseURL: 'http://5.35.93.223:7000/',
        headers: {
            Authorization: token,
        },
    });

    return instance;
};


export const instance = axios.create({
    baseURL: 'http://5.35.93.223:7000/',
    headers: {
        Authorization: getTokenFromLocalStorage() || '',
    },
})