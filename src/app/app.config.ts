import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { reducer } from "./reducers";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), provideState({name: 'game', reducer: reducer})]
};
