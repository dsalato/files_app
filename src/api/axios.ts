import axios from "axios";
import {getTokenFromLocalStorage} from "../helpers/localstorage";

export const instance = axios.create({
    baseURL: 'http://5.35.93.223:7000/',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage() || ''
    }
})