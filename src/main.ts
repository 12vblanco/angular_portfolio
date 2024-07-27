import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Conditionally enable production mode
if (environment.production) {
  enableProdMode();
}

// Bootstrapping the application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// Placeholder for CartContext functionality
// import { useProvideCart } from './utils/CartContext';
// useProvideCart();
