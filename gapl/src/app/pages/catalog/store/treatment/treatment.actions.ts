import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { TreatmentEntity, TreatmentPayload } from "../../model/treatment.model";

export const treatmentActions = createActionGroup({
    source: 'Treatment List',
    events: {
        'Select Treatment': props<{ id: number }>(),

        'Display Modal Form': props<{ id: number }>(),
        'Display Inline Form': emptyProps(),
        'Hide Modal Form': emptyProps(),
        'Hide Inline Form': emptyProps(),

        'Create Treatment': props<{ treatment: TreatmentPayload }>(),
        'Create Treatment Failure': props<{ error: Error }>(),
        'Create Treatment Success': props<{ result: boolean }>(),

        'Update Treatment via Form': props<{ treatment: TreatmentEntity }>(),
        'Update Treatment InLine': props<{ treatment: TreatmentEntity }>(),
        'Update Treatment Failure': props<{ error: Error }>(),
        'Update Treatment Success': props<{ id: number }>(),

        'Delete Treatment': props<{ id: number }>(),
        'Delete Treatment Failure': props<{ error: Error }>(),
        'Delete Treatment Success': props<{ result: boolean }>(),
    }
});