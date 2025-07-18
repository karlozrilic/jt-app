import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MenubarModule, BadgeModule, AvatarModule, Ripple],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'p-menubar-item-icon pi pi-home',
                routerLink: '/'
            },
            {
                label: 'Editor',
                icon: 'p-menubar-item-icon pi pi-star',
                routerLink: '/editor'
            },
            {
                label: 'Projects',
                icon: 'p-menubar-item-icon pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'p-menubar-item-icon pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'p-menubar-item-icon pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'p-menubar-item-icon pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'p-menubar-item-icon pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'p-menubar-item-icon pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'p-menubar-item-icon pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'p-menubar-item-icon pi pi-envelope'
            }
        ]
    }
}
