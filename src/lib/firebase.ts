import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWuOL2z7W1JMz-hOeQA0pdRHkoeovU_3c",
  authDomain: "paylog-c39d5.firebaseapp.com",
  projectId: "paylog-c39d5",
  storageBucket: "paylog-c39d5.appspot.com",
  messagingSenderId: "513537333879",
  appId: "1:513537333879:web:ee7f55b1ef16dd03990472",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
