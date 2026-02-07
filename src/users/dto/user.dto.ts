// DTO: Data Transfer Object
// This file defines the structure of user data used in requests and responses.

import {
    IsEmail,
    IsString,
    IsNotEmpty,
    IsInt,
    Min,
    Max,
} from 'class-validator'; // Importing validation decorators from class-validator package

export class User {
    id: number;
    name: string;
    email: string;
    age: number;
}

export class CreateUserDto {
    @IsString() // Validates that the value is a string
    @IsNotEmpty() // Validates that the value is not empty
    name: string;

    @IsEmail() // Validates that the value is a valid email address
    email: string;

    @IsInt() // Validates that the value is an integer
    @Min(10) // Validates that the value is greater than or equal to 10
    @Max(80, { message: 'Age must be less than or equal to 80' }) // Validates that the value is less than or equal to 80 with a custom error message
    age: number;
}

export class UpdateUserDto {
    @IsInt() // Validates that the value is an integer
    name?: string;
    email?: string;
    age?: number;
}
