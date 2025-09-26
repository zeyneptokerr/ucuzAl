/// <reference types="@angular/localize" />

// import 'zone.js/dist/zone';  // Included with Angular CLI.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) =>
     console.error(err)
);
