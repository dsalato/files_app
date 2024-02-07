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

}