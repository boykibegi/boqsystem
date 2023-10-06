import { Injectable } from '@nestjs/common';
import { productDto, } from 'src/product dto';
import { searchP } from 'src/product dto/searchP.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma:PrismaService){}
  
    async productin(dto:productDto){
        const product = await this.prisma.product.create({
            data:{
             description:dto.description,
             amount:dto.amount,
             Quantity:dto.Quantity,

            }
        })
    }
    
    async getProducts(dto:productDto){
        const product =await this.prisma.product.findMany()

        return product

    }

    async getProduct(dto:searchP){
        //find product by description
        const product = await this.prisma.product.findUnique({
            where:{
                description:dto.description
            }
        })
        
        return product
        
    }
}
