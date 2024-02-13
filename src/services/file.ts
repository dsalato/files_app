import {User} from "../types/types";
import {createInstance} from "../api/axios";

export const FileService = {
    async createFile(FileData: FormData): Promise<User> {
        const axiosInstance = await createInstance();
        const {data} = await axiosInstance.post('/drive/files', FileData);
        return data
    },
    async deleteFile(id: string): Promise<User> {
        const axiosInstance = await createInstance();
        const {data} = await axiosInstance.delete(`/drive/files/${id}`);
        return data
    },
}