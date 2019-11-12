// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyDz2jzAudfXNWViQ2hTVm56zlyt5OPcGUA',
    authDomain: 'rural-app-13579.firebaseapp.com',
    databaseURL: 'https://rural-app-13579.firebaseio.com',
    projectId: 'rural-app-13579',
    storageBucket: 'rural-app-13579.appspot.com',
    messagingSenderId: '227605693127',
    appId: ':227605693127:web:acd4bbdc13cbe5965734e2'
  },

  // apiEndpointUrl: 'https://ruralapi2019v1.azurewebsites.net'
  apiEndpointUrl: 'https://localhost:44304',
  apiEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
