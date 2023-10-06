import { IsEmail,IsNotEmpty,IsAlphanumeric } from "class-validator"
export class signinDto{
    @IsEmail()
    @IsNotEmpty()
    email : string
    
    @IsNotEmpty()
    @IsAlphanumeric()
    password: string
}