import {ResponseUser, ResponseUserData, User, UserData} from "../types/types";
import {instance} from "../api/axios";

export const AuthService = {
    async registration(userData:UserData): Promise<ResponseUserData | undefined>{
        const {data} = await instance.post<ResponseUserData>('/auth/register', userData)
        return data
    },
    async login(userData:UserData): Promise<User> {
        const {data} = await instance.post<User>('/auth/login', userData)
        return data
    },
    async getMe(): Promise<User | undefined>{
        const {data} = await instance.get<User>('auth/profile');
        if(data) return data
    },

}