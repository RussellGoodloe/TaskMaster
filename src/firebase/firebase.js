import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqRXZxgHRbdXdNDFULSO8MCRq561O61js",
    authDomain: "expensify-2b23b.firebaseapp.com",
    databaseURL: "https://expensify-2b23b.firebaseio.com",
    projectId: "expensify-2b23b",
    storageBucket: "expensify-2b23b.appspot.com",
    messagingSenderId: "148257388902",
    appId: "1:148257388902:web:2d8d90e7a3358ebd9ef0a7",
    measurementId: "G-DW3RJKZ2CK"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//export { firebase, database, googleAuthProvider as default };