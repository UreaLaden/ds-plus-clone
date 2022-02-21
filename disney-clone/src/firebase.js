import {initializeApp} from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const APIKEY = "AIzaSyBUbwExPoR4UDJwt9bzUnkWiP72wB2lgyU";
const AUTHDOMAIN = "disneyplus-clone-82a18.firebaseapp.com";
const PROJECTID = "disneyplus-clone-82a18";
const STORAGEBUCKET = "disneyplus-clone-82a18.appspot.com";
const MESSAGESENDERID = "791252373080";
const APPID = "1:791252373080:web:d08a9d1eb60c43492b442d";

const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGESENDERID,
    appId: APPID
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export {auth, provider, storage,signInWithPopup};
  export default db;