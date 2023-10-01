import { TreatmentEntity } from './../../model/treatment.model';

export interface TreatmentListMeta {
    entities: TreatmentEntity[];
    unupdated: TreatmentEntity[];
    undoables: TreatmentEntity[];
    count: number;
    loaded: boolean;
    loading: boolean;
}

export interface TreatmentMeta {
    selected: number,
    inlineEditTriggered: boolean,
    modalEditTriggered: boolean
}

export interface TreatmentListState {
    treatments: TreatmentListMeta;
    selection: TreatmentMeta;
}

export const treatmentListInitialState: TreatmentListState = {
    treatments: {
        entities: [],
        unupdated: [],
        undoables: [],
        count: 0,
        loaded: false,
        loading: false
    },
    selection: {
        selected: -1,
        inlineEditTriggered: false,
        modalEditTriggered: false
    }
}