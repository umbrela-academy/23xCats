import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AstController } from './more/ai-linkage/ast/ast.controller';
import { DbController } from './more/ai-linkage/db/db.controller';
import { NttService } from './more/ai-linkage/db/ntt.service';
import { PrismaService } from './more/ai-linkage/db/prisma.service';
import { DmmfService } from './more/ai-linkage/ast/dmmf.service';

@Module({
  imports: [],
  controllers: [AppController, AstController, DbController],
  providers: [AppService, DmmfService, PrismaService, NttService],
})
export class AppModule {}
