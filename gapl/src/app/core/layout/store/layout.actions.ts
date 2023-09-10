import { createAction } from '@ngrx/store';

export const expandSidebar = createAction('[Layout] Expand Sidebar');

export const collapseSidebar = createAction('[Layout] Collapse Sidebar');

export const hideSidebar = createAction('[Layout] Hide Sidebar');

export const showDock = createAction('[Layout] Show Dock');

export const hideDock = createAction('[Layout] Hide Dock');

export const collapseHeader = createAction('[Layout] Collapse Header');

export const showHeader = createAction('[Layout] Show Header');