import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((m) => m.LandingComponent),
    title: 'Marvin Cangcianno — Senior Full Stack Engineer',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.ProjectsComponent),
    title: 'Projects — Marvin Cangcianno',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.AboutComponent),
    title: 'About — Marvin Cangcianno',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactComponent),
    title: 'Contact — Marvin Cangcianno',
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs/docs').then((m) => m.DocsComponent),
    title: 'Docs — Marvin Cangcianno',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
