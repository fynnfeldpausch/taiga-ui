import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiRadioModule} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiRadioExample1} from './examples/1';
import {TuiRadioExample2} from './examples/2';
import {TuiRadioExample3} from './examples/3';
import {ExampleTuiRadioComponent} from './radio.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TuiRadioModule,
        TuiButtonModule,
        TuiLinkModule,
        InheritedDocumentationModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiRadioComponent)),
    ],
    declarations: [
        ExampleTuiRadioComponent,
        TuiRadioExample1,
        TuiRadioExample2,
        TuiRadioExample3,
    ],
    exports: [ExampleTuiRadioComponent],
})
export class ExampleTuiRadioModule {}
