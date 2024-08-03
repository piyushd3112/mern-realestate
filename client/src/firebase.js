

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-ff1a1.firebaseapp.com",
  projectId: "realestate-ff1a1",
  storageBucket: "realestate-ff1a1.appspot.com",
  messagingSenderId: "785330353144",
  appId: "1:785330353144:web:babd954deca32f85c19c0d"
};


export const app = initializeApp(firebaseConfig);


