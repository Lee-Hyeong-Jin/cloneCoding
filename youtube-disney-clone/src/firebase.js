// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE9lu1D_yTaTxoAz9CdPflbvm4B6P1Mkk",
  authDomain: "disneyplus-clone-c4505.firebaseapp.com",
  projectId: "disneyplus-clone-c4505",
  storageBucket: "disneyplus-clone-c4505.appspot.com",
  messagingSenderId: "420186396642",
  appId: "1:420186396642:web:1dd0106528fda53994cbbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
