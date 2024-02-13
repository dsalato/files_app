import {User, UserData} from "../types/types";
import {createInstance, instance} from "../api/axios";

export const AuthService = {
    async registration(userData:UserData): Promise<User | undefined>{
        const axiosInstance = await createInstance();
        const {data} = await axiosInstance.post<User>('/auth/register', userData);
        return data
    },
    async login(userData:UserData): Promise<User> {
        const axiosInstance = await createInstance();
        const {data} = await axiosInstance.post<User>('/auth/login', userData);
        return data
    },
}