import { Controller, Get } from '@nestjs/common';
import { DmmfService } from './dmmf.service';

@Controller('ast')
export class AstController {

    constructor(
        private readonly dmmfService: DmmfService
    ) {}

    @Get()
    getDMMF() {
        return this.dmmfService.getDMMF();
    }
}
