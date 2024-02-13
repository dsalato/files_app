import {FolderData, User} from "../types/types";
import {createInstance} from "../api/axios";

export const FolderService = {
    async createFolder(folderData:FolderData): Promise<User> {
        const axiosInstance = await createInstance();
        const {data} = await axiosInstance.post('/drive/folder', folderData);
        return data
    },
    async viewFolder(id: string) {
        const axiosInstance = await createInstance();
        const {data} = await axiosInstance.get(`/drive/folder/${id}`);
        return data
    },
    async updateFolder(id: string, folderData:FolderData): Promise<User> {
        const axiosInstance = await createInstance();
        const {data} = await axiosInstance.patch(`/drive/folder/${id}`, folderData);
        return data
    },
    async deleteFolder(id: string): Promise<User> {
        const axiosInstance = await createInstance();
        const {data} = await axiosInstance.delete(`/drive/folder/${id}`);
        return data
    },
}