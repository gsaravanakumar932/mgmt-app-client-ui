import { Routes } from '@angular/router';
// import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./components/post-list/post-list.component').then(m => m.PostListComponent),
        // canActivate: [AuthGuard]
    },
    {
        path: 'post-details/:id',
        loadComponent: () => import('./components/post-detail/post-detail.component').then(m => m.PostDetailComponent)
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];
