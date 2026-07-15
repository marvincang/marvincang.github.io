import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities',
          },
        },
      },
      license:
        'eyJpZCI6IjgwM2JlMjVkLTA4ZWYtNGJmMi05NTc2LTNlZjA0NDUxZTM5MSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODQxNDI5ODEsImV4cCI6MTgxNTY3ODk4MX0.7R12KKKCk237ID3zsm1Hzm23bjXezp4jC1unUyxEVr7OSYL3I2zlNhpNFUSOIWvH4NLL7EXzuyR9DiKhw1yUBw',
    }),
  ],
};
