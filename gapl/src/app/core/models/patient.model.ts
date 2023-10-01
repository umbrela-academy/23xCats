import { FlatKV } from '../utils/flat';
import { TeethHistory } from './teeth.model';

export interface IdentityEntity {
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
    photoUrl: string;
    patientId: string;
}

export interface ContactEntity {
    phone: number;
    email: string;
    address: string;
}

export interface TagEntity {
    color: `rgb(${number},${number},${number})`;
    labels: string[];
    notes: string[];
}

export interface EHREntity {
    medicalHistory: FlatKV;
    gallery: string[];
    teeth: TeethHistory;
}

export interface PatientEntity {
    id: IdentityEntity;
    contact: ContactEntity;
    tags: TagEntity;
    ehr: EHREntity;
}
