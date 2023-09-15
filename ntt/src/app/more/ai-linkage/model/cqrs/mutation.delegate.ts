import { Delegate } from "../meta/delegates";
import { NTTKey } from "../omega";
import { ICreate, ICreateMany } from "./mutation/create.args";
import { IDelete, IDeleteMany } from "./mutation/delete.args";
import { IUpdate, IUpdateMany } from "./mutation/update.args";
import { IUpsert } from "./mutation/upsert.args";

export interface Mutation<NTT extends NTTKey> {
  create: (ntt: NTT, args: ICreate<NTT>) => ReturnType<Delegate<NTT>['create']>;
  createMany: (
    ntt: NTT,
    args: ICreateMany<NTT>
  ) => ReturnType<Delegate<NTT>['createMany']>;

  update: (ntt: NTT, args: IUpdate<NTT>) => ReturnType<Delegate<NTT>['update']>;
  updateMany: (
    ntt: NTT,
    args: IUpdateMany<NTT>
  ) => ReturnType<Delegate<NTT>['updateMany']>;

  delete: (ntt: NTT, args: IDelete<NTT>) => ReturnType<Delegate<NTT>['delete']>;
  deleteMany: (
    ntt: NTT,
    args: IDeleteMany<NTT>
  ) => ReturnType<Delegate<NTT>['deleteMany']>;

  upsert: (ntt: NTT, args: IUpsert<NTT>) => ReturnType<Delegate<NTT>['upsert']>;
}