import {User, UserData} from "../types/types";
import {instance} from "../api/axios";

export const AuthService = {
    async registration(userData:UserData): Promise<User | undefined>{
        const {data} = await instance.post<User>('/auth/register', userData)
        return data
    },
    async login(userData:UserData): Promise<User> {
        const {data} = await instance.post<User>('/auth/login', userData)
        return data
    },

}