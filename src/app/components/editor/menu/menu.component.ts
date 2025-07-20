import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { Select, SelectChangeEvent } from 'primeng/select';
import { FloatLabel } from "primeng/floatlabel"
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { EditorService } from '../../../services/editor.service';

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
        ButtonModule,
        PopoverModule
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})

export class MenuComponent {
    formatValue: Format;
    sizeValue: Size;
    modeValue: Mode;
    colorFormatValue: ColorFormat;

    formats: SelectType[] | undefined;
    selectedFormat: SelectType | undefined;
    size: Size[] |undefined;
    selectedSize: Size | undefined;
    mode: SelectType[] |undefined;
    selectedMode: SelectType | undefined;
    colorFormat: SelectType[] | undefined;
    selectedColorFormat: SelectType | undefined;
    
    constructor(private stateService: EditorService) {
        this.formatValue = this.stateService.format.value;
        this.sizeValue = this.stateService.size.value;
        this.modeValue = this.stateService.mode.value;
        this.colorFormatValue = this.stateService.colorFormat.value;
    }

    ngOnInit() {
        this.formats = [
            { name: 'V1', value: 'v1' },
            { name: 'V2', value: 'v2' },
            { name: 'PNG', value: 'png' }
        ]

        this.selectedFormat = this.formats.find(el => el.value = this.formatValue)

        this.size = [
            { name: '16x32', value: '16x32', height: 16, width: 32 },
            { name: '16x64', value: '16x64', height: 16, width: 64 },
            { name: '16x96', value: '16x96', height: 16, width: 96 },
            { name: '16x128', value: '16x128', height: 16, width: 128 },
            { name: '16x192', value: '16x192', height: 16, width: 192 },
            { name: '24x48', value: '24x48', height: 24, width: 48 },
            { name: '24x64', value: '24x64', height: 24, width: 64 },
            { name: '32x128', value: '32x128', height: 32, width: 128 },
            { name: '32x160', value: '32x160', height: 32, width: 160 },
            { name: '32x192', value: '32x192', height: 32, width: 192 }
        ]

        this.selectedSize = this.size.find(el => el.height == this.sizeValue.height && el.width == this.sizeValue.width)

        this.mode = [
            { name: 'Static', value: 'static' },
            { name: 'Animation', value: 'animation' }
        ]

        this.selectedMode = this.mode.find(el => el.value = this.modeValue)

        this.colorFormat = [
            { name: '3-bit (8 colors)', value: '3-bit' },
            { name: '24-bit RGB', value: '24-bit' }
        ]

        this.selectedColorFormat = this.colorFormat.find(el => el.value = this.colorFormatValue)
    }

    toggleDebug() {
        this.stateService.debug.next(!this.stateService.debug.value)
    }

    selectChange(id: string | undefined, event: SelectChangeEvent) {
        switch(id) {
            case 'format': {
                this.stateService.format.next(event.value.value);
                break;
            }
            case 'size': {
                this.stateService.size.next(event.value.value);
                break;
            }
            case 'mode': {
                this.stateService.mode.next(event.value.value);
                break;
            }
            case 'color_format': {
                this.stateService.colorFormat.next(event.value.value);
                break;
            }
            default: {
                break;
            }
        }
        
    }
}
