// src/users/users.controller.ts
// UsersController to handle user-related HTTP requests
// This controller provides endpoints to manage users
// In nestjs, controllers are responsible for handling incoming requests and returning responses to the client.

import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import type { CreateUserDTO, UpdateUserDTO, UserDTO } from './dto/user.dto';

@Controller('users') // Define the route prefix for this controller `/users` using the @Controller decorator
export class UsersController {
    private users: UserDTO[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
    ];

    @Get() // @Get decorator to handle GET requests
    getUsers() {
        return this.users.map(({ id, name }) => ({ id, name }));
    }

    @Get(':id') // @Get decorator to handle GET requests, taking an ID as a path parameter
    getUserById(@Param('id') id: number) {
        // @Param decorator to extract the ID from the request parameters
        const user = this.users.find((user) => user.id === Number(id));
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

    @Post() // @Post decorator to handle POST requests
    createUser(@Body() user: CreateUserDTO) {
        // @Body decorator to extract the user data from the request body
        const newUser: UserDTO = {
            id: this.users.length + 1,
            name: user.name,
            email: user.email,
            age: user.age,
        };
        this.users.push(newUser);
        return { message: 'User created successfully' };
    }

    @Patch(':id') // @Patch decorator to handle PATCH requests, taking an ID as a path parameter
    updateUser(@Param('id') id: number, @Body() user: UpdateUserDTO) {
        // @Param decorator to extract the ID from the request parameters
        // @Body decorator to extract the user data from the request body
        const existingUser = this.users.find((u) => u.id === Number(id));
        if (!existingUser) {
            throw new NotFoundException();
        }
        Object.assign(existingUser, user);
        return { message: 'User updated successfully' };
    }

    @Delete(':id') // @Delete decorator to handle DELETE requests, taking an ID as a path parameter
    deleteUser(@Param('id') id: number) {
        // @Param decorator to extract the ID from the request parameters
        const userIndex = this.users.findIndex((u) => u.id === Number(id));
        if (userIndex === -1) {
            throw new NotFoundException();
        }
        this.users.splice(userIndex, 1);
        return { message: 'User deleted successfully' };
    }
}
