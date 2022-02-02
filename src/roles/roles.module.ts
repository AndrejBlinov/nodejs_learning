import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Roles } from './roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [TypeOrmModule.forFeature([Roles, User])],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
