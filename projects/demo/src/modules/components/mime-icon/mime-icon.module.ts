import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiMimeIconModule} from '@taiga-ui/kit';
import {TuiMimeIconExample1} from './examples/1';
import {ExampleTuiMimeIconComponent} from './mime-icon.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkModule,
        TuiMimeIconModule,
        TuiSvgModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiMimeIconComponent)),
        TuiNotificationModule,
    ],
    declarations: [ExampleTuiMimeIconComponent, TuiMimeIconExample1],
    exports: [ExampleTuiMimeIconComponent],
})
export class ExampleTuiMimeIconModule {}
