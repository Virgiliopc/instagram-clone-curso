import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVHzG1neeCL82jQFNemobwLSYZTvk45Z0",
    authDomain: "instagram-clone-curso-3de0d.firebaseapp.com",
    projectId: "instagram-clone-curso-3de0d",
    storageBucket: "instagram-clone-curso-3de0d.appspot.com",
    messagingSenderId: "405849071011",
    appId: "1:405849071011:web:5e5e82c1021e5baf858e16",
    measurementId: "G-PRRCTG48M3"
  });

  const db = firebase.firestore();
  const auth = firebase. auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export {db, auth, storage, functions};
