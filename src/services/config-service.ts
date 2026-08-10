import { Injectable, signal } from '@angular/core';
import { AppConfig } from '../types/AppConfig';
import { AppContents, MainPageContents } from '../types/AppContents';
import { PageNav } from '../types/NavLink';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  readonly config = signal<AppConfig | null>(null);
  readonly contents = signal<AppContents | null>(null);

  setConfig(data: any) {
    this.config.set(data);
  }

  setContents(data: any) {
    this.contents.set(data);
  }

  getEnabledHeaders(): PageNav[] {
    return this.config()?.headerNavs.filter((d) => !d.disabled) || [];
  }

  getMainPageContents(): MainPageContents {
    return this.contents()?.pages.main || ({} as MainPageContents);
  }

  loadDefaults() {}
}
