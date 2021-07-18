import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBO85e3SUkqU2psrWy85r3TXOm6s8JN5M4",
  authDomain: "otp-app-demo-e40c8.firebaseapp.com",
  projectId: "otp-app-demo-e40c8",
  storageBucket: "otp-app-demo-e40c8.appspot.com",
  messagingSenderId: "959699333672",
  appId: "1:959699333672:web:9d845d6b1a94f6f3413b1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase
