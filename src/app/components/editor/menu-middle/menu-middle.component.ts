import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { ColorPicker } from 'primeng/colorpicker';
import { ButtonModule } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';
import { EditorService } from '../../../services/editor.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu-middle',
    imports: [
        CommonModule,
        PanelModule,
        FormsModule,
        MenubarModule,
        BadgeModule, 
        AvatarModule,
        Ripple,
        TooltipModule,
        InputNumberModule,
        ToggleSwitch,
        ColorPicker,
        ButtonModule,
        PopoverModule
    ],
    templateUrl: './menu-middle.component.html',
    styleUrl: './menu-middle.component.scss'
})
export class MenuMiddleComponent {
    private subscriptions = new Subscription();
    colorFormat!: ColorFormat;

    pixelSize!: number;
    autoToggle!: boolean;
    gridToggle!: boolean;
    foregroundColor!: HEX;
    backgroundColor!: HEX;
    avaliableColors: Color[] = [];
    
    constructor(private stateService: EditorService) {}

    ngOnInit(): void {
        this.pixelSize = this.stateService.pixelSize.value
        this.autoToggle = this.stateService.autoToggle.value
        this.gridToggle = this.stateService.gridToggle.value
        this.foregroundColor = this.stateService.foregroundColor.value
        this.backgroundColor = this.stateService.backgroundColor.value
        this.avaliableColors = [
            {
                name: 'White',
                value: '#FFFFFF'
            },
            {
                name: 'Black',
                value: '#000000'
            },
            {
                name: 'Red',
                value: '#FF0000'
            },
            {
                name: 'Green',
                value: '#00FF00'
            },
            {
                name: 'Blue',
                value: '#0000FF'
            },
            {
                name: 'Yellow',
                value: '#FFFF00'
            },
            {
                name: 'Magenta',
                value: '#FF00FF'
            },
            {
                name: 'Cyan',
                value: '#00FFFF'
            },
        ];

        const pixelSizeSub = this.stateService.pixelSize.asObservable().subscribe((value) => {
            this.pixelSize = value;
        });
        const autoToggleSub = this.stateService.autoToggle.asObservable().subscribe((value) => {
            this.autoToggle = value;
        });
        const gridToggleSub = this.stateService.gridToggle.asObservable().subscribe((value) => {
            this.gridToggle = value;
        });
        const foregroundSub = this.stateService.foregroundColor.asObservable().subscribe((value) => {
            this.foregroundColor = value;
        });
        const backgroundSub = this.stateService.backgroundColor.asObservable().subscribe((value) => {
            this.backgroundColor = value;
        });

        const colorFormatSub = this.stateService.colorFormat.asObservable().subscribe((value) => {
            this.colorFormat = value;
        });

        this.subscriptions.add(pixelSizeSub)
        this.subscriptions.add(autoToggleSub)
        this.subscriptions.add(gridToggleSub)
        this.subscriptions.add(foregroundSub)
        this.subscriptions.add(backgroundSub)
        this.subscriptions.add(colorFormatSub)
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    colorpickerClick(event: Event, popover: Popover) {
        if (this.colorFormat == '3-bit') {
            popover.toggle(event)
        }
    }

    selectColor(color: Color, popover: Popover, popoverName: string) {
        if (popoverName == 'foreground') {
            this.stateService.foregroundColor.next(color.value)
        }

        if (popoverName == 'background') {
            this.stateService.backgroundColor.next(color.value)
        }
        popover.hide()
    }

    swapColors() {
        const background = this.backgroundColor;
        const foreground = this.foregroundColor;
        this.stateService.foregroundColor.next(background);
        this.stateService.backgroundColor.next(foreground);
    }
}
