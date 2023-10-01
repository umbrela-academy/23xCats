import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { setView } from '../../pages/appointments/store/calendar.actions';



@Injectable({
    providedIn: 'root'
})
export class HeaderRoutesService {

    headerNavItems: MenuItem[] = [
        {
            label: 'Patients',
            icon: 'pi pi-users',
            iconClass: 'bg-indigo-700',
            styleClass: 'text-indigo-800',
            items: [
                {
                    label: 'New',
                    icon: 'pi  pi-plus',
                    items: [
                        {
                            label: 'Quick',
                            icon: 'pi  pi-align-left',
                            command: () => this.store.dispatch(setView({ option: 'day' }))
                        },
                        {
                            label: 'Detailed',
                            icon: 'pi  pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                    ]
                },
                {
                    label: 'View',
                    icon: 'pi  pi-sliders-h',
                    items: [
                        {
                            label: 'Day',
                            icon: 'pi  pi-align-left',
                            command: () => this.store.dispatch(setView({ option: 'day' }))
                        },
                        {
                            label: 'Week',
                            icon: 'pi  pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                    ]
                },
                {
                    label: 'Sort By',
                    icon: 'pi  pi-sliders-h',
                    items: [
                        {
                            label: 'Appointment',
                            icon: 'pi  pi-align-left',
                            command: () => this.store.dispatch(setView({ option: 'day' }))
                        },
                        {
                            label: 'Name',
                            icon: 'pi  pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                        {
                            label: 'Payment',
                            icon: 'pi  pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi  pi-external-link'
                }
            ]
        },
        {
            label: 'Appointments',
            icon: 'pi pi-calendar',
            items: [
                {
                    label: 'View',
                    icon: 'pi  pi-sliders-h',
                    items: [
                        {
                            label: 'Day',
                            icon: 'pi  pi-align-left',
                            command: () => this.store.dispatch(setView({ option: 'day' }))
                        },
                        {
                            label: 'Week',
                            icon: 'pi  pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                        {
                            label: 'Month',
                            icon: 'pi  pi-align-center',
                            command: () => this.store.dispatch(setView({ option: 'month' }))
                        },
                        {
                            label: 'List',
                            icon: 'pi  pi-align-justify',
                            command: () => this.store.dispatch(setView({ option: 'list' }))
                        },

                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi  pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi  pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi  pi-calendar-minus'
                        },


                    ]
                },
                {
                    label: 'Archive',
                    icon: 'pi  pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi  pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Payments',
            icon: 'pi  pi-wallet',
            items: [
                {
                    label: 'Day',
                    icon: 'pi  pi-align-left',
                    command: () => this.store.dispatch(setView({ option: 'day' }))
                },
                {
                    label: 'Week',
                    icon: 'pi  pi-align-right',
                    command: () => this.store.dispatch(setView({ option: 'week' }))
                },
                {
                    label: 'Month',
                    icon: 'pi  pi-align-center',
                    command: () => this.store.dispatch(setView({ option: 'month' }))
                },
                {
                    label: 'List',
                    icon: 'pi  pi-align-justify',
                    command: () => this.store.dispatch(setView({ option: 'list' }))
                },

            ]
        },
        {
            label: 'Equipments',
            icon: 'pi  pi-link',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi  pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi  pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi  pi-calendar-minus'
                        },

                    ]
                },
                {
                    label: 'Archive',
                    icon: 'pi  pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi  pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Treatments',
            icon: 'pi  pi-bookmark',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi  pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi  pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi  pi-calendar-minus'
                        },

                    ]
                },
                {
                    label: 'Archive',
                    icon: 'pi  pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi  pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
    ];

    constructor(private store: Store) { }

}

