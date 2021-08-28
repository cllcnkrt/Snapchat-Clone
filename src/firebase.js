import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDTkMr-4DAqLOCCMHXI7dZr5do09tcufns",
  authDomain: "snapchat-clone-d6be4.firebaseapp.com",
  projectId: "snapchat-clone-d6be4",
  storageBucket: "snapchat-clone-d6be4.appspot.com",
  messagingSenderId: "234900777479",
  appId: "1:234900777479:web:667dc0f0978cfc4a1c18a2",
  measurementId: "G-W3QNVTSLGH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };