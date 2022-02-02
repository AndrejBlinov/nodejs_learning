import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Roles } from './roles.entity';


@Entity()
export class UserRoles  {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор" })
    @PrimaryGeneratedColumn()
    public id: number;

    @ApiProperty({ example: '5', description: "ID пользователя" })
    @Column({ type: 'integer'})
    public userId!: number;

    @ApiProperty({ example: '2', description: "ID группы" })
    @Column( {type: 'integer'} )
    public roleId!: number;

    @ManyToOne(() => User, user => user.userRoles)
    public User!: User;

    @ManyToOne(() => Roles, roles => roles.userRoles)
    public Roles!: Roles;
}