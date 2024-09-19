import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from '../entity/appointment.entity';
import { CreateAppointmentDto, UpdateAppointmentDto } from '../dto/create-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
  ) { }

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const appointment = this.appointmentRepository.create(createAppointmentDto);
    return this.appointmentRepository.save(appointment);
  }

  async findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find();
  }

  async findOne(id: string): Promise<Appointment | null> {
    return this.appointmentRepository.findOneBy({ id });
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<void> {
    await this.appointmentRepository.update(id, updateAppointmentDto);
  }

  async delete(id: string): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}
