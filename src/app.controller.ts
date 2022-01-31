import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user/user.service";
import { AppService } from "./app.service";

@Controller('/api')
export class AppController {

    constructor (private appService: AppService, private userService: UserService) {}

    @Get('/testData')
    getTestData () {
        return this.userService.findAll();
    }
}