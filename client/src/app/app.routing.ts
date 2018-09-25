import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
export const APPROUTES: Routes = [
    {
        path: 'post',
        loadChildren: './modules/post/post.module#PostModule'
    },
    {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login'
    },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APPROUTES, { useHash: true });
