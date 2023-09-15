
import { Delegate } from "../meta/delegates";
import { NTTKey } from "../omega";
import { IAggregate, IGroupBy } from "./query/aggregate.args";
import { ICount } from "./query/count.args";
import { IFieldRefs } from "./query/fields.refs";
import { IFindFirst, IFindMany, IFindUnique } from "./query/find.args";

export interface Query<NTT extends NTTKey> {
  findUnique: (
    ntt: NTT,
    args: IFindUnique<NTT>
  ) => ReturnType<Delegate<NTT>['findUnique']>;

  findFirst: (
    ntt: NTT,
    args: IFindFirst<NTT>
  ) => ReturnType<Delegate<NTT>['findFirst']>;

  findMany: (
    ntt: NTT,
    args: IFindMany<NTT>
  ) => ReturnType<Delegate<NTT>['findMany']>;

  count: (ntt: NTT, args: ICount<NTT>) => ReturnType<Delegate<NTT>['count']>;

  aggregate: (
    ntt: NTT,
    args: IAggregate<NTT>
  ) => ReturnType<Delegate<NTT>['aggregate']>;

  fields: (ntt: NTTKey) => IFieldRefs<NTTKey>;

  groupBy: (
    ntt: NTT,
    args: IGroupBy<NTT>
  ) => ReturnType<Delegate<NTT>['groupBy']>;
}