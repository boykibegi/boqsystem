import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url:'postgres://default:CQs9z7PquDZb@ep-patient-credit-49696121-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"'
                }
            }
        })
    }
}
