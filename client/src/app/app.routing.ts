import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostModule } from '../app/modules/post/post.module';

export const APPROUTES: Routes = [
    {
        path: '',
        // component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'post',
                pathMatch: 'full'
            },
            {
                path: 'post',
                loadChildren: () => PostModule
            }
        ]
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APPROUTES, { useHash: true });
