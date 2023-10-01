import { createFeatureSelector } from "@ngrx/store";
import { LayoutModel } from './layout.model';

export const selectLayout = createFeatureSelector<LayoutModel>('layout');