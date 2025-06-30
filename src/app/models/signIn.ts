export interface Menu{
        active?: boolean
        createdAt?: string
        icon?: string
        id?: string
        label?: string
        ordem?: number
        path?: string
        permission?: string
        updatedAt?: string
};

export class LoginUserModel{
    auth!: {
        accessToken:string
        reflashToken:string
    }
    permissions!: []
    role!: []
    user!: {
        id:string
        email:string
        firstname:string
        lastname:string
        cep:string
    }
    menus!: []
};