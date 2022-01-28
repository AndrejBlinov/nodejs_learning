import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService {
    getTestData () {
        return {'test1':1 , 'test2': 32}
    }
}