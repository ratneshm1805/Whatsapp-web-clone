import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa0G3KbFjIrdChTQxtxDe1Jn6ILpIuPL8",
  authDomain: "whatsapp-clone-f38d6.firebaseapp.com",
  projectId: "whatsapp-clone-f38d6",
  storageBucket: "whatsapp-clone-f38d6.appspot.com",
  messagingSenderId: "125791224275",
  appId: "1:125791224275:web:3df863eb3b10bd036b6f26",
  measurementId: "G-C1WD4RN7YL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
