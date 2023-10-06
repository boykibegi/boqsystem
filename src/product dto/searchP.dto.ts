import { IsNotEmpty } from "class-validator"

export class searchP{
    @IsNotEmpty()
    description: string
}