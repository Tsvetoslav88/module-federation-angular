import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // Your route here:
    //1. Static Module federation
    // {
    //   path: 'flights',
    //   loadChildren: () => import('mfe1/flights.module').then(m => m.FlightsModule)
    // },
    

    // Using this declaration makes our application more dinamic compared with using webpack
    // Webpack is used when our application is compile, where it is used at runtime.  

    //2. Part 4a: Basic Usage of Dynamic Federation
    // {
    //   path: 'flights',
    //   loadChildren: () => loadRemoteModule({
    //     type: 'module',
    //     remoteEntry: 'http://localhost:3000/remoteEntry.js', // Can be exposed into variable
    //     exposedModule: './flights.module'
    //   }).then(m => m.FlightsModule)
    // },

    //4. Part 4c: Use a Registry
    {
      path: 'flights',
      loadChildren: () =>
          loadRemoteModule({
              type: 'manifest',
              remoteName: 'mfe1',
              exposedModule: './flights.module'
          })
          .then(m => m.FlightsModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

