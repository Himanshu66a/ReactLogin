import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
//   authDomain: "fir-auth-1132.firebaseapp.com",
//   projectId: "fir-auth-1132",
//   storageBucket: "fir-auth-1132.appspot.com",
//   messagingSenderId: "1029021654707",
//   appId: "1:1029021654707:web:14aa4dee98449061701ac6",
//   measurementId: "G-MFP6M081T7",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCpaCsSCgsbms46sE9BB0TSSEXxSgReR14",
//   authDomain: "login-8e1c9.firebaseapp.com",
//   projectId: "login-8e1c9",
//   storageBucket: "login-8e1c9.appspot.com",
//   messagingSenderId: "169292105845",
//   appId: "1:169292105845:web:b676520c53473f0f4a103c"
// };


const firebaseConfig = {
  apiKey: "AIzaSyDZBL3XXYxktswi8bMYW_062x_oJ4YDNwA",
  authDomain: "reactlogin-22d2a.firebaseapp.com",
  projectId: "reactlogin-22d2a",
  storageBucket: "reactlogin-22d2a.appspot.com",
  messagingSenderId: "970255057803",
  appId: "1:970255057803:web:6af25aab604405c845258e",
  measurementId: "G-WWLJ2JHSHZ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
