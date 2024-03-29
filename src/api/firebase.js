// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage , ref, getDownloadURL} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:   process.env.REACT_APP_PERSONAL_EMAIL,
  authDomain: process.env.REACT_APP_FIREBASE_APIKEY,
  projectId: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export const downloadCV = async () => {
   try {
    const storageRef = ref(storage, 'Carlos Rubio Curriculum.pdf');
    const url = await getDownloadURL(storageRef);
    window.open(url)
   } catch (error) {
    
   }
}