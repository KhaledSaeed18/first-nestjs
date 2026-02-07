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
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(@Query('name') name: string) {
        return this.usersService.getAll(name);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.usersService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}
