import {FolderData, User} from "../types/types";
import {instance} from "../api/axios";

export const FolderService = {

    async createFolder(folderData:FolderData): Promise<User> {
        const {data} = await instance.post<User>('/drive/folder', folderData)
        return data
    },
    async viewFolder(id: string) {
        const {data} = await instance.get(`/drive/folder/${id}`)
        return data
    },
    async updateFolder(id: string, folderData:FolderData): Promise<User> {
        const {data} = await instance.patch(`/drive/folder/${id}`, folderData)
        return data
    },
    async deleteFolder(id: string): Promise<User> {
        const {data} = await instance.delete(`/drive/folder/${id}`)
        return data
    },

}