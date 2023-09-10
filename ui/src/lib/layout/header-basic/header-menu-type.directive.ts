import { Directive, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface HeaderTemplateContext<HMenuItem extends MenuItem> {
    $implicit: HMenuItem[];
}

// For a well-typed template context
@Directive({
    selector: 'ng-template[gitaHeaderMenu]',
})
export class HeaderMenuTypeDirective<HMenuItem extends MenuItem> {
    @Input() gitaHeaderMenu!: HMenuItem[] | '';

    static ngTemplateContextGuard<TContextItem extends MenuItem>(
        _dir: HeaderMenuTypeDirective<TContextItem>,
        ctx: unknown
    ): ctx is HeaderTemplateContext<TContextItem> {
        return true;
    }
}
