// src/users/users.service.ts
// UsersService to handle business logic related to users
// This service provides methods for CRUD operations on users
// It uses an in-memory array to store user data for demonstration purposes

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, User } from './dto/user.dto';

@Injectable()
// The @Injectable() decorator marks the class as a provider that can be injected into other components (like controllers) in NestJS
export class UsersService {
    private users: User[] = [
        { id: 1, name: 'Mohammad', email: 'test@gmail.com', age: 28 },
        { id: 2, name: 'Ahmad', email: 'test@gmail.com', age: 33 },
    ];

    // The getAll method retrieves all users, optionally filtering by name if a query parameter is provided
    getAll(name?: string) {
        if (name) {
            return this.users.filter((user) => user.name == name);
        }
        return this.users;
    }

    // The findOne method retrieves a single user by their ID. If the user is not found, it throws a NotFoundException, which results in a 404 HTTP response.
    findOne(id: number) {
        const user: User | undefined = this.users.find((user) => user.id == id);
        if (user) {
            return user;
        }
        throw new NotFoundException();
    }

    // The create method adds a new user to the in-memory array. It generates a new ID by taking the last user's ID and incrementing it by one. It then pushes the new user object into the users array and returns it.
    create(body: CreateUserDto) {
        const newUser = {
            id: this.users[this.users.length - 1].id + 1,
            name: body.name,
            email: body.email,
            age: body.age,
        };
        this.users.push(newUser);
        return newUser;
    }

    // The update method modifies an existing user's data. It first finds the index of the user to be updated. If the user is not found, it throws a NotFoundException. If the user is found, it updates the user's properties with the new values provided in the request body, while keeping existing values if new ones are not provided. Finally, it returns the updated user object.
    update(id: string, body: UpdateUserDto) {
        const userIndex = this.users.findIndex((user) => user.id == +id);
        if (userIndex == -1) {
            throw new NotFoundException();
        }
        this.users[userIndex].name = body.name || this.users[userIndex].name;
        this.users[userIndex].email = body.email || this.users[userIndex].email;
        this.users[userIndex].age = body.age || this.users[userIndex].age;
        return this.users[userIndex];
    }

    // The delete method removes a user from the in-memory array. It finds the index of the user to be deleted. If the user is not found, it throws a NotFoundException. If the user is found, it uses the splice method to remove the user from the array and returns the removed user.
    delete(id: string) {
        const userIndex = this.users.findIndex((user) => user.id == +id);
        if (userIndex == -1) {
            throw new NotFoundException();
        }
        return this.users.splice(userIndex, 1);
    }
}
