import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getProducts() {
        return [
            { id: 1, name: 'Product A' },
            { id: 2, name: 'Product B' },
        ];
    }
}
