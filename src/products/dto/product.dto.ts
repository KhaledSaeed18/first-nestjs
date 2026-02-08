// DTO: Data Transfer Object
// This file defines the structure of product data used in requests and responses.

import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsOptional,
} from 'class-validator'; // Importing validation decorators from class-validator package

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export class CreateProductDto {
    @IsString() // Validates that the value is a string
    @IsNotEmpty() // Validates that the value is not empty
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber() // Validates that the value is a number
    @IsPositive() // Validates that the price is a positive number
    @IsNotEmpty()
    price: number;
}

export class UpdateProductDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;
}
