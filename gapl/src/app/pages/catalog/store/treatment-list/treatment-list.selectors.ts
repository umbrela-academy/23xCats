import { TreatmentEntity } from './../../model/treatment.model';
import { createSelector } from '@ngrx/store';
import { treatmentListFeature } from './treatment-list.reducer';

const {
    selectTreatmentListState,
    selectTreatments,
    selectSelection
} = treatmentListFeature;

export const selectTreatmentEntities = createSelector(
    selectTreatments,
    (treatments) => treatments.entities
);

export const selectUnsavedEntities = createSelector(
    selectTreatments,
    (treatments) => treatments.unupdated
);


export const selectIsLoading = createSelector(
    selectTreatments,
    (treatments) => treatments.loading
);

export const selectModalTrigger = createSelector(
    selectSelection,
    (selection) => selection.modalEditTriggered
);

export const selectInlineTrigger = createSelector(
    selectSelection,
    (selection) => selection.inlineEditTriggered
);

export const selectSelectedId = createSelector(
    selectSelection,
    (selection) => selection.selected
);

export const selectSelectedEntity = createSelector(
    selectSelectedId,
    selectTreatmentEntities,
    (id: number, allTreatments: TreatmentEntity[]) => {
        if (id && allTreatments) {
            return allTreatments.find(treatment => id === treatment.id)
        } else {
            return {}
        }
    }
);

export const selectHasUnsaved = createSelector(
    selectUnsavedEntities,
    (unupdated) => unupdated.length > 0
)

export const selectNeedsUpdate = (id?: number) =>
    createSelector(
        selectUnsavedEntities,
        (unupdated) => unupdated.findIndex(u => u.id === id) !== -1
    );


export const treatmentListSelectors = {
    selectTreatmentListState,
    selectTreatmentEntities,
    selectIsLoading,
};

export const treatmentEditSelectors = {
    selectSelection,
    selectModalTrigger,
    selectInlineTrigger,
    selectSelectedId,
    selectSelectedEntity,
    selectNeedsUpdate,
    selectHasUnsaved
}