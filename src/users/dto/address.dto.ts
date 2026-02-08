import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class Address {
    id: number;
    country: string;
    city: string;
    street: string;
}

export class CreateAddressDto {
    @IsString() // Validates that the value is a string
    @IsNotEmpty() // Validates that the value is not empty
    country: string;

    @IsString()
    city: string;

    @IsString()
    street: string;
}

export class UpdateAddressDto {
    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    city?: string;

    @IsString()
    @IsOptional()
    street?: string;
}
