import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePen, faGear, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-left-panel',
    imports: [
        TabsModule,
        FontAwesomeModule
    ],
    templateUrl: './left-panel.component.html',
    styleUrl: './left-panel.component.scss'
})

export class LeftPanelComponent {
    faFilePen: IconDefinition = faFilePen;
    faGear: IconDefinition = faGear;
}
