import { Component } from '@angular/core';

import { MenuComponent } from '../../components/editor/menu/menu.component';
import { MenuMiddleComponent } from "../../components/editor/menu-middle/menu-middle.component";

@Component({
    selector: 'app-editor',
    imports: [MenuComponent, MenuMiddleComponent],
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.scss'
})

export class EditorComponent {
}
