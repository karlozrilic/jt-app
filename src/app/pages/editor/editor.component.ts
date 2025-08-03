import { Component } from '@angular/core';

import { MenuComponent } from '../../components/editor/menu/menu.component';
import { MenuMiddleComponent } from "../../components/editor/menu-middle/menu-middle.component";
import { LeftPanelComponent } from "../../components/editor/left-panel/left-panel.component";
import { RightPanelComponent } from "../../components/editor/right-panel/right-panel.component";
import { CenterPanelComponent } from "../../components/editor/center-panel/center-panel.component";

@Component({
    selector: 'app-editor',
    imports: [MenuComponent, MenuMiddleComponent, LeftPanelComponent, RightPanelComponent, CenterPanelComponent],
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.scss'
})

export class EditorComponent {
}
