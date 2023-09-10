import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { TreatmentEntity } from './../../model/treatment.model';


export const treatmentListActions = createActionGroup({
    source: 'Treatment Pages',
    events: {
        'Load Treatments': emptyProps(),
        'Load Treatments Failure': props<{ error: Error }>(),
        'Load Treatments Success': props<{ entities: TreatmentEntity[] }>(),

        'Change Page Number': props<{ currentPage: number }>(),
        'Change Pagination Config': props<{ pageSize: number }>(),

        'Change By Id': props<{ newItem: TreatmentEntity }>(),
        'Undo By Id': props<{ id: number }>(),
    }
});

