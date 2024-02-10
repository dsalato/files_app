import {FileData, User} from "../types/types";
import {instance} from "../api/axios";

export const FileService = {

    async createFile(FileData:FileData): Promise<User> {
        const {data} = await instance.post<User>('/drive/files', FileData)
        return data
    },
    async deleteFile(id: string): Promise<User> {
        const {data} = await instance.delete(`/drive/files/${id}`)
        return data
    },

}