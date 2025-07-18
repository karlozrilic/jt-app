import { Component, Input, ViewChild } from '@angular/core';
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
import { ColorPicker, ColorPickerChangeEvent } from 'primeng/colorpicker';

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

    @ViewChild('fp') foregroundPickerRef!: any;
    @ViewChild('bp') backgroundPickerRef!: any;

    handleFocus() {
        // Get the input element inside the color picker
        const fpEl: HTMLInputElement = this.foregroundPickerRef.el.nativeElement.querySelector('input');
        const bpEl: HTMLInputElement = this.backgroundPickerRef.el.nativeElement.querySelector('input');

        fpEl.blur()
        bpEl.blur()
        console.log(this.foregroundPickerRef)

        if (this.foregroundPickerRef.overlayVisible) {
            // this.foregroundPickerRef.hide();
        }

        if (this.backgroundPickerRef.overlayVisible) {
            // this.backgroundPickerRef.hide();
        }
    }
}
