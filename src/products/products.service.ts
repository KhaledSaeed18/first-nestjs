import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    // Inject the Product repository from TypeORM
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    // Get all products (excluding soft-deleted ones)
    async getAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    // Get a single product by ID
    async getOne(id: number): Promise<Product> {
        const product = await this.productRepository.findOne({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    // Create a new product
    async create(createProductDto: CreateProductDto): Promise<Product> {
        const newProduct = this.productRepository.create(createProductDto);
        return await this.productRepository.save(newProduct);
    }

    // Update an existing product
    async update(
        id: number,
        updateProductDto: UpdateProductDto,
    ): Promise<Product> {
        const product = await this.getOne(id);
        Object.assign(product, updateProductDto);
        return await this.productRepository.save(product);
    }

    // Soft delete a product
    async delete(id: number): Promise<{ message: string }> {
        const product = await this.getOne(id);
        await this.productRepository.softRemove(product);
        return { message: `Product with ID ${id} has been deleted` };
    }
}
