import { IdEntity } from "../../../core/models/entity.model";

export interface TreatmentPayload {
    commonName: string;
    treatmentType: string | null;
    visits: number;
    expense: number | null;
}

export type TreatmentEntity = IdEntity & TreatmentPayload;