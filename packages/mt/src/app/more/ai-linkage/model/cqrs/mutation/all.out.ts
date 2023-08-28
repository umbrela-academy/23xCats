import { Delegate } from "../../meta/delegates";
import { NTTKey } from "../../omega";

export type OCreate<NTT extends NTTKey> = ReturnType<Delegate<NTT>['create']>;
export type OCreateMany<NTT extends NTTKey> = ReturnType<
  Delegate<NTT>['createMany']
>;

export type ODelete<NTT extends NTTKey> = ReturnType<Delegate<NTT>['delete']>;
export type ODeleteMany<NTT extends NTTKey> = ReturnType<
  Delegate<NTT>['deleteMany']
>;

export type OUpdate<NTT extends NTTKey> = ReturnType<Delegate<NTT>['update']>;
export type OUpdateMany<NTT extends NTTKey> = ReturnType<
  Delegate<NTT>['updateMany']
>;

export type OUpsert<NTT extends NTTKey> = ReturnType<Delegate<NTT>['upsert']>;
