export class CreateAppointmentDto {
    patientId: string;
    doctorId: string;
    appointmentDate: Date;
  }
  
  export class UpdateAppointmentDto {
    appointmentDate?: Date;
    status?: string;
  }