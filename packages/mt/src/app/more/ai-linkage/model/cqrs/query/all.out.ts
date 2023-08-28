import { Delegate } from "../../meta/delegates"
import { NTTKey } from "../../omega"

export type OFindUnique<NTT extends NTTKey> = ReturnType<Delegate<NTT>['findUnique']>
export type OFindFirst<NTT extends NTTKey> = ReturnType<Delegate<NTT>['findFirst']>
export type OFindMany<NTT extends NTTKey> = ReturnType<Delegate<NTT>['findMany']>
export type OCount<NTT extends NTTKey> = ReturnType<Delegate<NTT>['count']>
export type OAggregate<NTT extends NTTKey> = ReturnType<Delegate<NTT>['aggregate']>
export type OGroupBy<NTT extends NTTKey> = ReturnType<Delegate<NTT>['groupBy']>