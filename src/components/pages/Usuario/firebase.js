// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4R-RRTfr97DsZ3i19u5NaE-2_4jEOibk",
  authDomain: "uploadingfile-746c0.firebaseapp.com",
  projectId: "uploadingfile-746c0",
  storageBucket: "uploadingfile-746c0.appspot.com",
  messagingSenderId: "45289219416",
  appId: "1:45289219416:web:86f50de11be7120d37312d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)



