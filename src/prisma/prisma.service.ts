import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url:'postgresql://codekiller:13245678Twi@@localhost:5432/BOQSYSTEM?schema=public'
                    
                }
            }
        })
    }
}
