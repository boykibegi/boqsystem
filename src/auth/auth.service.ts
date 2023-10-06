import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from 'src/dto';
import { signinDto } from 'src/dto/signin.dto';
import { productDto } from 'src/product dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';

@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService){}
     async signup(dto:AuthDto){
        const hash = await argon.hash(dto.password)
        
        try{
            const user = await this.prisma.user.create({
                data:{
                    firstName:dto.firstName,
                    lastName:dto.lastName,
                    email:dto.email,
                    hash,
                }
            })
            delete user.hash 
    
            return user; 
        }catch(error){
            if (error instanceof PrismaClientKnownRequestError){
                if (error.code === "P2002"){
                    throw new ForbiddenException ('Credentials taken')
                }
            }
        } throw error
     }
      
    async signin(dto:signinDto){
        //find user by email
        const user = await this.prisma.user.findUnique({
            where:{
                email:dto.email
            }
        }) 
        //if user does not exist throw an exception
        if (!user){
            throw new ForbiddenException('Invalid Credentials')
        }
        //compare password
        const pwMatches = await argon.verify(user.hash,dto.password)
        //if password is incorrect throw an exception
        if (!pwMatches){
            throw new ForbiddenException('Invalid Credentials')
        }
        // send bck the user
        delete user.hash
        return user
    }
    async readUser(dto:AuthDto){
        const user = await this.prisma.user.findMany()
       return user
    }
 
}
