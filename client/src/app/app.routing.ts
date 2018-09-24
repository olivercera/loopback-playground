import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const APPROUTES: Routes = [
    {
        path: 'post',
        loadChildren: './modules/post/post.module#PostModule'
    },
    {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APPROUTES, { useHash: true });
