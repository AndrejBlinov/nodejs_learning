import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from "./app.service";
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { UserService } from "./user/user.service";
import { UserController } from "./user/user.controller";

@Module( {
    controllers: [UserController],
    providers: [AppService,UserService],
    imports: [
            ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.HOST,
                port: Number(process.env.PORT_DATABASE),
                username: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                entities: [],
                synchronize: true,
                autoLoadEntities: true,
            }),
            UserModule,
            TypeOrmModule.forFeature([User]),
    ]
})
export class AppModule {}