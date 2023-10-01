import { ValueFormatterParams } from "ag-grid-community";

export const localeDateFormat = (params: ValueFormatterParams) => params.value ? new Date(params.value).toLocaleDateString() : '';