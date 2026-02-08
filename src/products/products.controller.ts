import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
    // Dependency Injection
    // NestJS will create an instance of ProductsService and inject it into the controller
    constructor(private readonly productsService: ProductsService) {}

    // GET /products - Get all products
    @Get()
    getAllProducts() {
        return this.productsService.getAll();
    }

    // GET /products/:id - Get a single product by ID
    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.getOne(id);
    }

    // POST /products - Create a new product
    @Post()
    createProduct(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    // PATCH /products/:id - Update an existing product
    @Patch(':id')
    updateProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productsService.update(id, updateProductDto);
    }

    // DELETE /products/:id - Delete a product (soft delete)
    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.delete(id);
    }
}
