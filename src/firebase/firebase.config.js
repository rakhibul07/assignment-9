import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmlFTNJpH77GNdjbIIBiZMYPYbKoOs6Zw",
  authDomain: "assignment-9-ee090.firebaseapp.com",
  projectId: "assignment-9-ee090",
  storageBucket: "assignment-9-ee090.appspot.com",
  messagingSenderId: "183327738866",
  appId: "1:183327738866:web:93cae22e18cb31a323396b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;