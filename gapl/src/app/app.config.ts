import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(
      HttpClientModule,
      StoreModule.forRoot({}, {}),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      })
    ),
  ],
};
