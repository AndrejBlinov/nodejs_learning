import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { UserService } from "./user/user.service";

@Module( {
    controllers: [AppController],
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