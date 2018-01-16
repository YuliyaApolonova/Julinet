// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: { // can be retrieved from the Firebase console.
    apiKey: 'AIzaSyBXkMQV2CJnHZNQQIJxW7mjrrB2lnVFp7w',
    authDomain: 'julinet-23225.firebaseapp.com',
    databaseURL: 'https://julinet-23225.firebaseio.com',
    projectId: 'julinet-23225',
    storageBucket: 'julinet-23225.appspot.com',
    messagingSenderId: '329121494313'
  }
};
