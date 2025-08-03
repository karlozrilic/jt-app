import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClockRotateLeft, faReply, faGears, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-right-panel',
    imports: [
        TabsModule,
        FontAwesomeModule
    ],
    templateUrl: './right-panel.component.html',
    styleUrl: './right-panel.component.scss'
})
export class RightPanelComponent {
    faClockRotateLeft: IconDefinition = faClockRotateLeft;
    faReply: IconDefinition = faReply;
    faGears: IconDefinition = faGears;
}
