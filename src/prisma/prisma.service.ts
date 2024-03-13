import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url:'postgres://default:CQs9z7PquDZb@ep-patient-credit-49696121.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require'
                    
                }
            }
        })
    }
}
