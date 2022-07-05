// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYCME3SSSardsX5cdN9D4eBHWa53KayfI",
  authDomain: "muvi-5cb03.firebaseapp.com",
  projectId: "muvi-5cb03",
  storageBucket: "muvi-5cb03.appspot.com",
  messagingSenderId: "299551183153",
  appId: "1:299551183153:web:663129c76159fa440ae010",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
