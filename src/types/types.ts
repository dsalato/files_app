export type User = {
    id: number,
    login: string,
    token:string
}
export type UserData = {
    login: string,
    password: string
}
export type ResponseUser = {
    login: string,
    password: string,
    id: number,
    createdAt: string,
    updateAt: string
}
export type ResponseUserData = {
    token: string,
    user: ResponseUser
}
