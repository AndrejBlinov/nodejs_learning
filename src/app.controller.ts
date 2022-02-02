import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user/user.service";
import { AppService } from "./app.service";
import { User } from "./user/user.entity";
import { createUserDto } from "./user/dto/create-user-dto";

@Controller('/api')
export class AppController {

    constructor (private appService: AppService, private userService: UserService) {}

    @Get('/users/getAllUsers')
    getTestData () {
        return this.userService.findAll();
    }

    @Post('/users/createUser')
    createUser (@Body() userDto: createUserDto) {
        return this.userService.create (userDto);
    }
}