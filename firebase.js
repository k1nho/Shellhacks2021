import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDN4m0vHs5dt89bnw9JOe2XgIObnGZmks",
  authDomain: "creatt-dbdc3.firebaseapp.com",
  projectId: "creatt-dbdc3",
  storageBucket: "creatt-dbdc3.appspot.com",
  messagingSenderId: "820289257499",
  appId: "1:820289257499:web:3d529bf9b4f94aa30138be",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
