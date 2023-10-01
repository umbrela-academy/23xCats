import { createFeature, createReducer, on } from "@ngrx/store";
import { treatmentReducers } from '../treatment/treatment.reducers';
import { TreatmentListMeta, TreatmentListState } from './../treatment-list/treatment-list.state';
import { treatmentListActions } from './treatment-list.actions';
import { treatmentListInitialState } from './treatment-list.state';

export const treatmentListFeature = createFeature({
    name: 'treatmentList',
    reducer: createReducer(
        treatmentListInitialState,
        on(treatmentListActions.loadTreatments, (state): TreatmentListState => {
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                loading: true
            };
            return { ...state, treatments };
        }),
        on(treatmentListActions.loadTreatmentsSuccess, (state, { entities }): TreatmentListState => {
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                entities: [...state.treatments.entities, ...entities],
                count: state.treatments.count + entities.length,
                loading: false,
                loaded: true
            };
            return { ...state, treatments };
        }),
        on(treatmentListActions.loadTreatmentsFailure, (state): TreatmentListState => {
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                loading: false,
                loaded: true
            };
            return { ...state, treatments };
        }),
        on(treatmentListActions.changeById, (state, { newItem }): TreatmentListState => {
            const found = state.treatments.entities.find(ntt => ntt.id === newItem.id)
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                undoables: found ? [...state.treatments.undoables, found] : state.treatments.undoables,
                entities: state.treatments.entities
                    .map((oldItem) => oldItem.id === newItem.id ? newItem : oldItem),
                unupdated: [...state.treatments.unupdated, newItem]
            }
            return { ...state, treatments };
        }),
        on(treatmentListActions.undoById, (state, { id }): TreatmentListState => {
            const found = state.treatments.undoables.find(ntt => ntt.id == id)
            if (!found) return state;
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                entities: state.treatments.entities
                    .map((oldItem) => oldItem.id === found.id ? found : oldItem),
                undoables: state.treatments.undoables.filter(u => u.id !== id),
                unupdated: state.treatments.unupdated.filter(u => u.id !== id)
            }
            return { ...state, treatments };
        }),
        ...treatmentReducers
    )
});