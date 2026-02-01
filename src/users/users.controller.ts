import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() // @Get decorator to handle GET requests
    getUsers() {
        return [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
        ];
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
