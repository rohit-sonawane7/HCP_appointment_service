import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentService } from './services/appointment.service';
import { AppointmentController } from './controllers/appointment.controller';
import { Appointment } from './entity/appointment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Appointment])],
    controllers: [AppointmentController],
    providers: [AppointmentService],
})
export class AppointmentModule { }
