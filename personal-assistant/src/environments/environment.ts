// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBUSvKkyRV22MAhuhHZLeI_IpRrDD52iNk",
    authDomain: "personalassistant-ec554.firebaseapp.com",
    databaseURL: "https://personalassistant-ec554.firebaseio.com",
    projectId: "personalassistant-ec554",
    storageBucket: "personalassistant-ec554.appspot.com",
    messagingSenderId: "720590166253"
  },

  dialogflow: {
    angualrbot: 'fb57e9c4edb34e31bfdd91ece7f5427c'
  }
  
};
