import { Menu } from "./menu"
import { ProfileListInterface } from "./profileList"
import { UserModel } from "./user"

export class LoginUserModel{
    auth!: {
        accessToken:string
        reflashToken:string
    }
    permissions!: []
    role!: []
    user!:UserModel
    menus!: Menu[]
    profiles!: []
};

export class TokenDto{
    accessToken!: string
}