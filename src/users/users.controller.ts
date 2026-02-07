// src/users/users.controller.ts
// UsersController to handle incoming HTTP requests related to users
// This controller defines routes for CRUD operations on users
// It uses the UsersService to perform the actual data manipulation and retrieval

import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    // Dependency Injection
    // NestJS will create an instance of UsersService and inject it into the controller
    // The 'private readonly' keywords automatically create and initialize a class property
    // This allows us to use 'this.usersService' to access the service methods throughout the controller
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(@Query('name') name: string) {
        return this.usersService.getAll(name); // Use the getAll method from the UsersService to retrieve users, optionally filtering by name
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id); // Use the findOne method from the UsersService to retrieve a user by their ID, ensuring the ID is parsed as an integer
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.usersService.create(body); // Use the create method from the UsersService to create a new user with the data provided in the request body, which should match the CreateUserDto structure
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserDto) {
        return this.usersService.update(id, body); // Use the update method from the UsersService to update an existing user identified by their ID with the data provided in the request body, which should match the UpdateUserDto structure
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id); // Use the delete method from the UsersService to remove a user identified by their ID
    }
}
