import { PatientName } from './PatientName';
import { PostalAddress } from './PostalAddress';

export class Table {

    id: String;
    patientName:  PatientName;
    postalAddress: PostalAddress;
    dateOfBirth: Date;
    mailId : String;
    phone:String;
    maritalStatus:String;
    medicalHistory : String
}
