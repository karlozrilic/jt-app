import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { Select } from 'primeng/select';
import { FloatLabel } from "primeng/floatlabel"
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'app-menu',
    imports: [
        CommonModule,
        PanelModule,
        FormsModule,
        MenubarModule,
        BadgeModule, 
        AvatarModule,
        Ripple,
        TooltipModule,
        Select,
        FloatLabel,
        InputNumberModule,
        ToggleSwitch,
        ColorPicker
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})

export class MenuComponent {
    @Input() data: MenuItem[] | undefined;
    @Input() title: string | undefined;
}
