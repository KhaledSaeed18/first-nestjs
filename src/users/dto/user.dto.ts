// DTO: Data Transfer Object
// This file defines the structure of user data used in requests and responses.

export type UserDTO = {
    id: number;
    name: string;
    email: string;
    age: number;
};

export type CreateUserDTO = {
    name: string;
    email: string;
    age: number;
};

export type UpdateUserDTO = {
    name?: string;
    email?: string;
    age?: number;
};
