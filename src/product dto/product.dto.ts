import { IsNotEmpty, isNumber } from "class-validator"

export class productDto{
    @IsNotEmpty()
    description: string
    
    @IsNotEmpty() 
    Quantity: string
    
    @IsNotEmpty()
    amount:string
}