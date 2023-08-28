import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BaseDMMF } from '@prisma/client/runtime/library';

@Injectable()
export class DmmfService {

    getDMMF(): BaseDMMF {
        return Prisma.dmmf;
    }
}
