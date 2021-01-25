import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-mime-icon',
    templateUrl: './mime-icon.template.html',
    styleUrls: ['./mime-icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMimeIconComponent {
    constructor() {}
}
