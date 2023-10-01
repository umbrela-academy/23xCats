import { on } from "@ngrx/store";
import { TreatmentListMeta, TreatmentListState, TreatmentMeta } from "../treatment-list/treatment-list.state";
import { treatmentActions } from "./treatment.actions";

export const treatmentReducers = [
    on(treatmentActions.selectTreatment, (state: TreatmentListState, { id }): TreatmentListState => {
        const selection: TreatmentMeta = {
            ...state.selection,
            selected: id,
            inlineEditTriggered: false,
            modalEditTriggered: false
        };
        return { ...state, selection };
    }),
    on(treatmentActions.displayModalForm, (state: TreatmentListState, { id }): TreatmentListState => {
        const selection: TreatmentMeta = {
            ...state.selection,
            selected: id,
            modalEditTriggered: true
        };
        return { ...state, selection };
    }),
    on(treatmentActions.displayInlineForm, (state: TreatmentListState): TreatmentListState => {
        const selection: TreatmentMeta = {
            ...state.selection,
            inlineEditTriggered: true
        };
        return { ...state, selection };
    }),
    on(treatmentActions.hideModalForm, (state: TreatmentListState): TreatmentListState => {
        const selection: TreatmentMeta = {
            ...state.selection,
            modalEditTriggered: false
        };
        return { ...state, selection };
    }),
    on(treatmentActions.hideInlineForm, (state: TreatmentListState): TreatmentListState => {
        const selection: TreatmentMeta = {
            ...state.selection,
            inlineEditTriggered: false
        };
        return { ...state, selection };
    }),
    on(treatmentActions.updateTreatmentSuccess, (state: TreatmentListState, { id }): TreatmentListState => {
        const found = state.treatments.unupdated.find(ntt => ntt.id == id)
        if (!found) return state;
        const treatments: TreatmentListMeta = {
            ...state.treatments,
            undoables: state.treatments.undoables.filter(u => u.id !== id),
            unupdated: state.treatments.unupdated.filter(u => u.id !== id)
        }
        return { ...state, treatments };
    }),
]