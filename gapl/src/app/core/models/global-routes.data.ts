import { MenuItem } from 'primeng/api';

export const globalRouteItems: MenuItem[] = [
    {
        label: 'Overview',
        icon: 'pi-fw pi-home',
        routerLink: ['/']
    },
    {
        label: 'Schedule',
        icon: 'pi-fw pi-calendar-plus',
        routerLink: ['appointments']
    },
    {
        label: 'Patients',
        icon: 'pi-fw pi-user-plus',
        routerLink: ['patients']
    },
    {
        label: 'Payments',
        icon: 'pi-fw pi-book',
        routerLink: ['payments']
    },
    {
        label: 'Inventory',
        icon: 'pi-fw pi-link',
        routerLink: ['inventory']
    },
    {
        label: 'Catalog',
        icon: 'pi-fw pi-qrcode',
        routerLink: ['catalog']
    },
    {
        label: 'Statistics',
        icon: 'pi-fw pi-chart-line',
        routerLink: ['statistics']
    }
];

export const globalSettings: MenuItem = {
    label: 'Settings',
    icon: 'pi-fw pi-sliders-h',
    routerLink: ['settings']
}