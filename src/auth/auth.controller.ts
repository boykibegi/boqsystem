import { Body, Controller, Get, Post,} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/dto'
import { signinDto } from 'src/dto/signin.dto';




@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
   
   @Post('signup') 
   signup(@Body() dto:AuthDto ){
    
    return this.authService.signup(dto)
   }

   @Post('signin')
    signin(@Body() dto:signinDto){
     return this.authService.signin(dto)
   }
   
   @Get('users')
   readusers(dto:AuthDto){
    return this.authService.readUser(dto)
   }
}  
 

