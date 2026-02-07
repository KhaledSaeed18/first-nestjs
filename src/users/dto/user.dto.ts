// DTO: Data Transfer Object
// This file defines the structure of user data used in requests and responses.

import {
    IsEmail,
    IsString,
    IsNotEmpty,
    IsBoolean,
    IsOptional,
} from 'class-validator'; // Importing validation decorators from class-validator package

export class User {
    id: number;
    userName: string;
    email: string;
    password: string;
    major: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export class CreateUserDto {
    @IsString() // Validates that the value is a string
    @IsNotEmpty() // Validates that the value is not empty
    userName: string;

    @IsEmail() // Validates that the value is a valid email address
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    major: string;

    @IsBoolean()
    isActive: boolean;
}

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    userName?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    major?: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}
