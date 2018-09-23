import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthguardGuard],
        component: PostListComponent
    },
    /*
    {
        path: 'create',
        canActivate: [AuthguardGuard],
        component: PostCreateComponent
    },
    {
        path: 'view/:id',
        canActivate: [AuthguardGuard],
        component: PostViewComponent
    }
    */
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    // providers: [AuthguardGuard],
})
export class PostRoutingModule { }
