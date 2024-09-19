import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentModule } from './appointment.module';
import { Appointment } from './entity/appointment.entity';
import * as dotenv from 'dotenv';

dotenv.config();
console.log("DATABASE_URL");
console.log(process.env.DATABASE_URL);


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            synchronize: true,
            entities: [Appointment],
            migrations: ['src/migration'],
        }),
        TypeOrmModule.forFeature([Appointment]),
        AppointmentModule,
    ],
})
export class AppModule { }
