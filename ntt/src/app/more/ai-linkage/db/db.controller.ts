import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { Mutation } from '../model/cqrs/mutation.delegate';
import { OCreate, OCreateMany, ODelete, ODeleteMany, OUpdate, OUpdateMany, OUpsert } from '../model/cqrs/mutation/all.out';
import { ICreate, ICreateMany } from '../model/cqrs/mutation/create.args';
import { IDelete, IDeleteMany } from '../model/cqrs/mutation/delete.args';
import { IUpdate, IUpdateMany } from '../model/cqrs/mutation/update.args';
import { IUpsert } from '../model/cqrs/mutation/upsert.args';
import { Query } from '../model/cqrs/query.delegate';
import { IAggregate, IGroupBy } from '../model/cqrs/query/aggregate.args';
import { OAggregate, OCount, OFindFirst, OFindUnique, OGroupBy } from '../model/cqrs/query/all.out';
import { ICount } from '../model/cqrs/query/count.args';
import { IFieldRefs } from '../model/cqrs/query/fields.refs';
import { IFindFirst, IFindMany, IFindUnique } from '../model/cqrs/query/find.args';
import { NTTKey } from '../model/omega';
import { NttService } from './ntt.service';

/**
 * TODO GET requests for finding unique and for paginated responses
 * TODO Pagination: for findMany
 * TODO Param: no-cache, no-db, no-search
 * TODO id validators
 * TODO custom validators
 * TODO custom interceptors/middleware
 * TODO custom proxy+adapter for Solr, Redis
 * 
*/
@Controller('db')
export class DbController
  implements Query<NTTKey>, Mutation<NTTKey>
{
  constructor(private readonly nttService: NttService) {}

  @Put(':ntt/query/unique')
  findUnique<NTT extends NTTKey>(
    @Param('ntt') ntt: NTT,
    @Body() args: IFindUnique<NTT>
  ): OFindUnique<NTT> {
    return this.nttService.delegate(ntt).findUnique(args);
  }

  @Put(':ntt/query/first')
  findFirst<NTT extends NTTKey>(
    @Param('ntt') ntt: NTT,
    @Body() args: IFindFirst<NTT>
  ): OFindFirst<NTT> {
    return this.nttService.delegate(ntt).findFirst(args);
  }

  @Put(':ntt/query/many')
  findMany<NTT extends NTTKey>(
    @Param('ntt') ntt: NTT,
    @Body() args: IFindMany<NTT>
  ) {
    return this.nttService.delegate(ntt).findMany(args);
  }

  @Put(':ntt/query/count')
  count<NTT extends NTTKey>(@Param('ntt') ntt: NTT, @Body() args: ICount<NTT>): OCount<NTT> {
    return this.nttService.delegate(ntt).count(args);
  }

  @Put(':ntt/query/aggregate')
  aggregate<NTT extends NTTKey>(
    @Param('ntt') ntt: NTT,
    @Body() args: IAggregate<NTT>
  ): OAggregate<NTT> {
    return this.nttService.delegate(ntt).aggregate(args);
  }

  @Put(':ntt/query/fields')
  fields<NTT extends NTTKey>(@Param('ntt') ntt: NTT): IFieldRefs<NTT> {
    return this.nttService.delegate(ntt).fields;
  }

  @Put(':ntt/query/groupBy')
  groupBy<NTT extends NTTKey>(@Param('ntt') ntt: NTT, @Body() args: IGroupBy<NTT>): OGroupBy<NTT> {
    return this.nttService.delegate(ntt).groupBy(args);
  }

  @Post(':ntt/mutation/create')
  create<NTT extends NTTKey>(@Param('ntt') ntt: NTT, @Body() args: ICreate<NTTKey>): OCreate<NTT> {
    return this.nttService.delegate(ntt).create(args);
  }

  @Post(':ntt/mutation/createMany')
  createMany<NTT extends NTTKey>(
    @Param('ntt') ntt: NTT,
    @Body() args: ICreateMany<NTTKey>
  ): OCreateMany<NTT> {
    return this.nttService.delegate(ntt).createMany(args);
  }

  @Post(':ntt/mutation/upsert')
  upsert<NTT extends NTTKey>(@Param('ntt') ntt: NTT, @Body() args: IUpsert<NTTKey>): OUpsert<NTT> {
    return this.nttService.delegate(ntt).upsert(args);
  }

  @Patch(':ntt/mutation/update')
  update<NTT extends NTTKey>(@Param('ntt') ntt: NTT, @Body() args: IUpdate<NTTKey>): OUpdate<NTT> {
    return this.nttService.delegate(ntt).update(args);
  }

  @Patch(':ntt/mutation/updateMany')
  updateMany<NTT extends NTTKey>(
    @Param('ntt') ntt: NTT,
    @Body() args: IUpdateMany<NTTKey>
  ): OUpdateMany<NTT> {
    return this.nttService.delegate(ntt).updateMany(args);
  }

  @Patch(':ntt/mutation/delete')
  delete<NTT extends NTTKey>(@Param('ntt') ntt: NTT, @Body() args: IDelete<NTTKey>): ODelete<NTT> {
    return this.nttService.delegate(ntt).delete(args);
  }

  @Patch(':ntt/mutation/deleteMany')
  deleteMany<NTT extends NTTKey>(
    @Param('ntt') ntt: NTT,
    @Body() args: IDeleteMany<NTTKey>
  ): ODeleteMany<NTT> {
    return this.nttService.delegate(ntt).deleteMany(args);
  }
}
