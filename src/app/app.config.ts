import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { HttpClient } from '@angular/common/http';
import { forkJoin, tap, catchError, of } from 'rxjs';
import { ConfigService } from '../services/config-service';

const GIST_RAW_BASE =
  'https://gist.githubusercontent.com/marvincang/39c72b032b4aba016f7aac9dbf49cc5c/raw';

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
    provideAppInitializer(() => {
      const http = inject(HttpClient);
      const configService = inject(ConfigService);
      const cacheBuster = `?t=${Date.now()}`;

      return forkJoin({
        config: http.get(`${GIST_RAW_BASE}/mvnc-config.json${cacheBuster}`),
        contents: http.get(`${GIST_RAW_BASE}/mvnc-contents.json${cacheBuster}`),
      }).pipe(
        tap(({ config, contents }) => {
          configService.setConfig(config);
          configService.setContents(contents);
        }),
        catchError((error) => {
          console.error('Failed to load remote configuration:', error);
          // Set fallback defaults so the app can still boot
          configService.loadDefaults();
          return of(null);
        }),
      );
    }),
  ],
};
