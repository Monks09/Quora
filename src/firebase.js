// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBPirclkj6ztztBJA3cmOs4tJxZc4cjPiY",
    authDomain: "quora-911b6.firebaseapp.com",
    projectId: "quora-911b6",
    storageBucket: "quora-911b6.appspot.com",
    messagingSenderId: "652987358544",
    appId: "1:652987358544:web:c3abfb2154fa59c0686055",
    measurementId: "G-LSSSWY0RKW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()

  const Provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, Provider}
  export default db