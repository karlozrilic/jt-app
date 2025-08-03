import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { GridComponent } from "../grid/grid.component";

@Component({
    selector: 'app-center-panel',
    imports: [
        PanelModule,
        GridComponent
    ],
    templateUrl: './center-panel.component.html',
    styleUrl: './center-panel.component.scss'
})
export class CenterPanelComponent {

}
