import { ProfileListInterface } from "./profileList"
import { UserModel } from "./user"

export interface Menu{
        active: boolean
        createdAt: string
        icon: string
        id: string
        label: string
        ordem: null
        path: string
        permission: string
        updatedAt: string
};

export class LoginUserModel{
    auth!: {
        accessToken:string
        reflashToken:string
    }
    permissions!: []
    role!: []
    user!:UserModel
    menus!: []
    profiles!: []
};