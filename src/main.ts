import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports.js';

Amplify.configure(awsmobile);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
