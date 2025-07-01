// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkdHSUqpyv92j5j_76VqspsxMAh21A7Ww",
  authDomain: "lumigram-d826e.firebaseapp.com",
  projectId: "lumigram-d826e",
  storageBucket: "lumigram-d826e.firebasestorage.app",
  messagingSenderId: "269837769029",
  appId: "1:269837769029:web:5f970a30fcaa61eeb2862c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
