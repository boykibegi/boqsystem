import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { productDto } from 'src/product dto';
@Controller('product')
export class ProductsController {
    constructor (private productservice:ProductsService) {}

    
    @Post('item')
  
    productIn(@Body() dto:productDto){
    return this.productservice.productin(dto)
   }
  
   @Get('goods')
   
   getProducts( dto:productDto){
    return this.productservice.getProducts(dto)

   }

  


}
