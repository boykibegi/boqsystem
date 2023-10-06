import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, isNotEmpty, isNumberString} from "class-validator"

export class AuthDto{
    @IsNotEmpty()
    firstName : string

    @IsNotEmpty()
    lastName: string

    @IsEmail()
    @IsNotEmpty()
    email : string
    
    @IsNotEmpty()
    @IsAlphanumeric()
    password: string
    
}