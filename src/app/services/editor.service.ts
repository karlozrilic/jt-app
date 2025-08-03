import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class EditorService {
    format: BehaviorSubject<Format> = new BehaviorSubject<Format>('v1');
    debug: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    size: BehaviorSubject<Size> = new BehaviorSubject<Size>({
        name: '16x64',
        value: '16x64',
        height: 16,
        width: 64
    });
    mode: BehaviorSubject<Mode> = new BehaviorSubject<Mode>('static');
    colorFormat: BehaviorSubject<ColorFormat> = new BehaviorSubject<ColorFormat>('3-bit');
    pixelSize: BehaviorSubject<number> = new BehaviorSubject<number>(33);
    autoToggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    gridToggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    foregroundColor: BehaviorSubject<HEX> = new BehaviorSubject<HEX>('#FF0000');
    backgroundColor: BehaviorSubject<HEX> = new BehaviorSubject<HEX>('#000000');

    constructor() {};
}