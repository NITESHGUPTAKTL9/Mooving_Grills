import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoRS6xTYJqB29lvlAdwzxdxZzAyfvUdL0",
  authDomain: "moovinggrills-d2f2f.firebaseapp.com",
  projectId: "moovinggrills-d2f2f",
  storageBucket: "moovinggrills-d2f2f.appspot.com",
  messagingSenderId: "48720006505",
  appId: "1:48720006505:web:165e796b6197191eb701f8",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
firestore.enablePersistence();

export { firestore };

export default firebase;
