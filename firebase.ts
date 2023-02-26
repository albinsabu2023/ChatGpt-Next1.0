import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnokhUw4f1DhxzRCOPm8OIl13bLKMy2kY",
  authDomain: "chat-gpt-c3547.firebaseapp.com",
  projectId: "chat-gpt-c3547",
  storageBucket: "chat-gpt-c3547.appspot.com",
  messagingSenderId: "238239564451",
  appId: "1:238239564451:web:8be0e79730081b16abb516"
};

// Initialize Firebase
const app = getApps().length?getApp():initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db};