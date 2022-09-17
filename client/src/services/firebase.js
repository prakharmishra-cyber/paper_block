// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYMC-42UPuEO4zisd384hAmtHoNyLmgho",
  authDomain: "paper-block.firebaseapp.com",
  projectId: "paper-block",
  storageBucket: "paper-block.appspot.com",
  messagingSenderId: "634598118324",
  appId: "1:634598118324:web:4317a11e2826e719ce18e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
