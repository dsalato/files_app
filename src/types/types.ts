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
export type File = {
    name: string;
    filepath: string;
}
export type FileType = {
    id: string;
    file: File;
    type: "file"
}
export type FolderType = {
    id: string,
    name: string,
    type: "folder"
}


