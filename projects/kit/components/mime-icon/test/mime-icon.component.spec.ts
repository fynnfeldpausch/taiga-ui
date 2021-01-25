/*import {Component, DebugElement, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiDataListModule,
    tuiEditingKeys,
    TuiHintControllerModule,
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {activeText, dispatchOnActive, NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputComponent} from '../input.component';
import {TuiInputModule} from '../input.module';


describe('Input', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;
    let updateSpy: jasmine.Spy;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                NoopAnimationsModule,
                ReactiveFormsModule,
                TuiInputModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
                TuiDataListModule,
                TuiDataListWrapperModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;

        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('Автокомплит', () => {
        beforeEach(() => {
            fixture.detectChanges();
            inputPO.focus();
        });
    });
});
*/
