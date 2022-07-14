import { loadRemoteEntry } from '@angular-architects/module-federation';

// import('./bootstrap')
// 	.catch(err => console.error(err));

//3. Part 4b: Loading Meta Data Upfront
// All remtoe entry are loading in the beggining when is happened version check and that all remote entry are compiled before to use them
// Promise.all([
// 	loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:3000/remoteEntry.js'})
// ])
// .catch(err => console.error('Error loading remote entries', err))
// .then(()=>import('./bootstrap'))
// .catch(err => console.error(err));

//4. Part 4c: Use a Registry
import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/mf.manifest.json')
    .catch(err => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap'))
    .catch(err => console.error(err));