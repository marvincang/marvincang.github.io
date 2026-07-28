import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'me',
    loadComponent: () => import('../pages/main-page/main-page').then((m) => m.MainPage),
    title: 'Marvin Cangcianno',
  },
  {
    path: '',
    loadComponent: () =>
      import('../pages/cia-birthday-27-page/cia-birthday-27-page').then((m) => m.CiaBirthday27Page),
    title: "Cia's 27th Birthday!",
  },
  // {
  //   path: 'projects',
  //   loadComponent: () => import('../pages/projects-page/projects-page').then((m) => m.ProjectsPage),
  //   title: 'Marvin Cangcianno',
  // },
  {
    path: 'ciabday-27/game',
    loadComponent: () =>
      import('../pages/cia-birthday-27-page/typing-game/typing-game').then((m) => m.TypingGame),
    title: 'Typing Game',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
