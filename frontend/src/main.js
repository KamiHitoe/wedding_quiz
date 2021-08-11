import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import "firebase/firestore"

Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDARhMfvyH4J1QqileKbx-AAHcpLqnSiQo",
    authDomain: "wedding-quiz-ac222.firebaseapp.com",
    projectId: "wedding-quiz-ac222",
    storageBucket: "wedding-quiz-ac222.appspot.com",
    messagingSenderId: "576888249109",
    appId: "1:576888249109:web:bc53f7aead1618a5c4e71c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const collection = db.collection('messages');

// collection.add({
//   message: 'test'
// })
// .then(doc => {
//   console.log(`${doc.id} added !`);
// })

