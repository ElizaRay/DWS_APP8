//import de la libreria
import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKZRYvgTYBMAX0pWrNdGn_HJ1aoPVygWE",
  authDomain: "crudreact-fc384.firebaseapp.com",
  projectId: "crudreact-fc384",
  storageBucket: "crudreact-fc384.appspot.com",
  messagingSenderId: "915334697634",
  appId: "1:915334697634:web:760c4009aa4bb84565fdfb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}