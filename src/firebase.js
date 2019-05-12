import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyAxE2u8GbUAXMwwDTPP8SB-27n-cP7VyAM",
    authDomain: "slackappclone.firebaseapp.com",
    databaseURL: "https://slackappclone.firebaseio.com",
    projectId: "slackappclone",
    storageBucket: "slackappclone.appspot.com",
    messagingSenderId: "444405223739"
  };
  firebase.initializeApp(config);

  export default firebase;

