import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './list/list.component';
import { AuthGuard } from '../../services/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full' ,
        component: PostListComponent,
        // canActivate: [AuthGuard],
    }
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
