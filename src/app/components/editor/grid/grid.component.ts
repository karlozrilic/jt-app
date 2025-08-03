import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { EditorService } from '../../../services/editor.service';

@Component({
    selector: 'app-grid',
    imports: [],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss'
})

export class GridComponent {
    @ViewChildren('gridCell', { read: ElementRef }) gridCells!: QueryList<ElementRef>;
    leftMouseDown = false;
    rightMouseDown = false;
    sizeValue: Size;
    pixelSize: number;
    foregroundColor: HEX;
    backgroundColor: HEX;
    widthRange: number[];
    heightRange: number[];
    grid: { x: number; y: number; color: HEX; }[][];

    constructor(private stateService: EditorService) {
        this.sizeValue = this.stateService.size.value;
        this.pixelSize = this.stateService.pixelSize.value
        this.foregroundColor = this.stateService.foregroundColor.value
        this.backgroundColor = this.stateService.backgroundColor.value
        this.widthRange = Array.from({ length: this.sizeValue.width }, (_, i) => i);
        this.heightRange = Array.from({ length: this.sizeValue.height }, (_, i) => i);
        this.grid = this.heightRange.map(y => {
            return this.widthRange.map(x => {
                return {
                    x: x,
                    y: y,
                    color: this.backgroundColor
                }
            })
        })
    }


    ngOnInit(): void {
        
    }

    onMouseDown(event: MouseEvent): void {
        const {row, column} = (event.target as HTMLElement).dataset
        const rowY = parseInt(row!)
        const columnX = parseInt(column!)

        // 2 = right mouse button
        if (event.button === 2) {
            event.preventDefault();
            this.rightMouseDown = true;
            this.grid[rowY][columnX].color = this.backgroundColor;
        }

        // 0 = left mouse button
        if (event.button === 0) {
            this.leftMouseDown = true;
            this.grid[rowY][columnX].color = this.foregroundColor;
        }
        
    }

    onMouseMove(event: MouseEvent): void {
        const x = event.clientX;
        const y = event.clientY;

        if (this.rightMouseDown) {
            this.gridCells.forEach((elemRef) => {
                const {row, column} = (elemRef.nativeElement as HTMLElement).dataset
                const rowY = parseInt(row!)
                const columnX = parseInt(column!)
                const rect = elemRef.nativeElement.getBoundingClientRect();
                const isOver =
                    x >= rect.left &&
                    x <= rect.right &&
                    y >= rect.top &&
                    y <= rect.bottom;

                if (isOver) {
                    this.grid[rowY][columnX].color = this.backgroundColor;
                }
            });
        }

        if (this.leftMouseDown) {
            this.gridCells.forEach((elemRef,) => {
                const {row, column} = (elemRef.nativeElement as HTMLElement).dataset
                const rowY = parseInt(row!)
                const columnX = parseInt(column!)
                const rect = elemRef.nativeElement.getBoundingClientRect();
                const isOver =
                    x >= rect.left &&
                    x <= rect.right &&
                    y >= rect.top &&
                    y <= rect.bottom;

                if (isOver) {
                    this.grid[rowY][columnX].color = this.foregroundColor;
                }
            });
        }
    }

    onMouseUp(event: MouseEvent): void {
        const {row, column} = (event.target as HTMLElement).dataset
        const rowY = parseInt(row!)
        const columnX = parseInt(column!)

        if (event.button === 2) {
            this.rightMouseDown = false;
            this.grid[rowY][columnX].color = this.backgroundColor;
        }

        if (event.button === 0) {
            this.leftMouseDown = false;
            this.grid[rowY][columnX].color = this.foregroundColor;
        }
    }
}
