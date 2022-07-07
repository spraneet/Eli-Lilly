import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLDjzLBDXkiK2J4tQOtOpsJi8I5pl9Wgc",
  authDomain: "newproject-cc34c.firebaseapp.com",
  projectId: "newproject-cc34c",
  storageBucket: "newproject-cc34c.appspot.com",
  messagingSenderId: "518966086072",
  appId: "1:518966086072:web:9ee29457f1c14739e9674d",
  measurementId: "G-G6TC2TDFF8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
