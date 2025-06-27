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
}