import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
  
  apiKey: "AIzaSyDnz8gWE2b99zGg9BA6PKfuw4OJXDtQrtg",
  authDomain: "nicolas-simonet.firebaseapp.com",
  projectId: "nicolas-simonet",
  storageBucket: "nicolas-simonet.appspot.com",
  messagingSenderId: "858944736806",
  appId: "1:858944736806:web:84444146974401909d20e7"

});

var db = firebaseApp.firestore();

export { db };