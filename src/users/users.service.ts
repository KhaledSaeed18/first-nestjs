import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, User } from './dto/user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 1, name: 'Mohammad', email: 'test@gmail.com', age: 28 },
        { id: 2, name: 'Ahmad', email: 'test@gmail.com', age: 33 },
    ];

    getAll(name?: string) {
        if (name) {
            return this.users.filter((user) => user.name == name);
        }
        return this.users;
    }

    findOne(id: number) {
        const user: User | undefined = this.users.find((user) => user.id == id);
        if (user) {
            return user;
        }
        throw new NotFoundException();
    }

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

    delete(id: string) {
        const userIndex = this.users.findIndex((user) => user.id == +id);
        if (userIndex == -1) {
            throw new NotFoundException();
        }
        return this.users.splice(userIndex, 1);
    }
}
