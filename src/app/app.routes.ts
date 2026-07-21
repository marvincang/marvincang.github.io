import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/main-page/main-page').then((m) => m.MainPage),
    title: 'Marvin Cangcianno',
  },
  {
    path: 'projects',
    loadComponent: () => import('../pages/projects-page/projects-page').then((m) => m.ProjectsPage),
    title: 'Marvin Cangcianno',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
