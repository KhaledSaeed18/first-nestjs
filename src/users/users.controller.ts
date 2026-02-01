import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';

@Controller('users')
export class UsersController {
    private users: UserDTO[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
    ];

    @Get() // @Get decorator to handle GET requests
    getUsers() {
        return this.users.map(({ id, name }) => ({ id, name }));
    }

    @Post() // @Post decorator to handle POST requests
    createUser() {
        return { message: 'User created successfully' };
    }

    @Put(':id') // @Put decorator to handle PUT requests, taking an ID as a path parameter
    updateUser() {
        return { message: 'User updated successfully' };
    }

    @Delete(':id') // @Delete decorator to handle DELETE requests, taking an ID as a path parameter
    deleteUser() {
        return { message: 'User deleted successfully' };
    }
}
