import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { MenuComponent } from '../../components/editor/menu/menu.component';

interface SelectType {
    name: string;
    value: string;
}

interface Size {
    name: string;
    value: string;
    height: number;
    width: number;
}

type HEX = `#${string}`;

@Component({
    selector: 'app-editor',
    imports: [MenuComponent],
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.scss'
})

export class EditorComponent {
    fileMenu: MenuItem[] | undefined;
    viewMenu: MenuItem[] | undefined;
    formats: SelectType[] | undefined;
    selectedFormat: SelectType | undefined;
    size: Size[] |undefined;
    selectedSize: Size | undefined;
    mode: SelectType[] |undefined;
    selectedMode: SelectType | undefined;
    colorFormat: SelectType[] |undefined;
    selectedColorFormat: SelectType | undefined;
    autoToggle: boolean = true;
    gridToggle: boolean = true;
    foregroundColor: HEX = '#FFFFFF';
    backgroundColor: HEX = '#000000';

    ngOnInit() {
        this.formats = [
            { name: 'V1', value: 'v1' },
            { name: 'V2', value: 'v2' },
            { name: 'PNG', value: 'png' }
        ]

        this.selectedFormat = this.formats[0]

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

        this.selectedSize = this.size[1]

        this.mode = [
            { name: 'Static', value: 'static' },
            { name: 'Animation', value: 'animation' }
        ]

        this.selectedMode = this.mode[0]

        this.colorFormat = [
            { name: '3-bit (8 colors)', value: '3-bit' },
            { name: '24-bit RGB', value: '24-bit' }
        ]

        this.selectedColorFormat = this.colorFormat[0]

        this.fileMenu = [
            {
                title: 'File',
                items: [
                    {
                        icon: 'pi pi-folder-open',
                        tooltip: 'Import JT files or import PNG images',
                    },
                    {
                        icon: 'pi pi-save',
                        tooltip: 'Save as JT file or export as PNG'
                    },
                    {
                        label: 'Format',
                        type: 'select',
                        data: this.formats,
                        selectedData: this.selectedFormat
                    },
                    {
                        icon: 'pi pi-prime',
                        tooltip: 'Toggle display of RBG array data for debugging'
                    }
                ]
            },
            {
                title: 'Canvas',
                items: [
                    {
                        label: 'Size',
                        type: 'select',
                        data: this.size,
                        selectedData: this.selectedSize
                    },
                    {
                        label: 'Mode',
                        type: 'select',
                        data: this.mode,
                        selectedData: this.selectedMode
                    }
                ]
            },
            {
                title: 'Format',
                items: [
                    {
                        label: 'Color format',
                        type: 'select',
                        data: this.colorFormat,
                        selectedData: this.selectedColorFormat
                    }
                ]
            }
        ]

        this.viewMenu = [
            {
                title: 'View',
                items: [
                    {
                        label: 'Pixel size',
                        type: 'number',
                        data: 13
                    },
                    {
                        label: 'Auto',
                        type: 'toggle',
                        data: this.autoToggle
                    },
                    {
                        label: 'Grid',
                        type: 'toggle',
                        data: this.gridToggle
                    }
                ]
            },
            {
                title: 'Colors',
                items: [
                    {
                        label: 'Colors',
                        type: 'colors',
                        foregroundColor: this.foregroundColor,
                        backgroundColor: this.backgroundColor
                    }
                ]
            }
        ]
    }
}
