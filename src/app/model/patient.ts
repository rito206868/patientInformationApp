import { PatientName } from './patient_name';
import { PostalAddress } from './postal_address';

export class Patient {

    id: String;
    patientName: PatientName;
    postalAddress: PostalAddress;
    dateOfBirth: Date;
    gender: String;
    mailId: String;
    phone: String;
    maritalStatus: String;
    medHistory: String[];
}
