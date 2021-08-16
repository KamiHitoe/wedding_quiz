import firebase from 'firebase/app'
import "firebase/firestore"

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDARhMfvyH4J1QqileKbx-AAHcpLqnSiQo",
  authDomain: "wedding-quiz-ac222.firebaseapp.com",
  projectId: "wedding-quiz-ac222",
  storageBucket: "wedding-quiz-ac222.appspot.com",
  messagingSenderId: "576888249109",
  appId: "1:576888249109:web:bc53f7aead1618a5c4e71c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
