export type User = {
    token:string
}

export type UserData = {
    login: string,
    password: string
}

export type FolderData = {
    name: string,
    parentId: string,
}
export type FileData = {
    folderId: string,
    file: string,
}

