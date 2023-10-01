import { IdEntity } from "../../../core/models/entity.model";

export interface InventoryCreate {
    name: string;
    code: string | null;
    currentAmount: number;
    neededAmount: number | null;
    cost: number | null;
    lastPurchase: Date | null;
}

export type InventoryUpdate = IdEntity & InventoryCreate;