import { createReducer, on } from "@ngrx/store";
import { collapseHeader, collapseSidebar, expandSidebar, hideDock, hideSidebar, showDock, showHeader } from "./layout.actions";
import { LayoutModel } from "./layout.model";

export const initialState: LayoutModel = {
    sidebar: 'collapsed',
    dock: 'hidden',
    header: 'shown'
}

export const layoutReducer = createReducer(
    initialState,

    on(expandSidebar, (state): LayoutModel => ({ ...state, sidebar: 'shown' })),
    on(collapseSidebar, (state): LayoutModel => ({ ...state, sidebar: 'collapsed' })),
    on(hideSidebar, (state): LayoutModel => ({ ...state, sidebar: 'hidden' })),

    on(showDock, (state): LayoutModel => ({ ...state, dock: 'shown' })),
    on(hideDock, (state): LayoutModel => ({ ...state, dock: 'hidden' })),

    on(collapseHeader, (state): LayoutModel => ({ ...state, header: 'collapsed' })),
    on(showHeader, (state): LayoutModel => ({ ...state, header: 'shown' }))
)