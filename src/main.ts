import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } 
                     from '@angular/platform-browser-dynamic';
import { MoneypinMainModule } from './Main/MoneypinMain.module.js';

platformBrowserDynamic().bootstrapModule(MoneypinMainModule);