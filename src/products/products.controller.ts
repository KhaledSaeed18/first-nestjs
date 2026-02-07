import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('products')
export class ProductsController {
    // Dependency Injection
    // NestJS will create an instance of UsersService and inject it into the controller
    // The 'private readonly' keywords automatically create and initialize a class property
    // This allows us to use 'this.usersService' to access the service methods throughout the controller
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getProducts() {
        // Testing UsersService - get all users (use this.usersService to access the service methods)
        // Here we are using service from an imported module (UsersModule) to demonstrate how we can access data from another module in NestJS
        const users = this.usersService.getAll();
        return {
            products: [
                { id: 1, name: 'Product A' },
                { id: 2, name: 'Product B' },
            ],
            users: users, // Testing: include users from UsersService
        };
    }
}
