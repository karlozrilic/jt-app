import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './pages/editor/editor.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'editor',
        component: EditorComponent,
        title: 'Editor',
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
