import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAvKpFV3BFJFKp75RdN9MXWbqSvOjR1xqE',
  authDomain: 'developer-1040f.firebaseapp.com',
  projectId: 'developer-1040f',
  storageBucket: 'developer-1040f.appspot.com',
  messagingSenderId: '629918834444',
  appId: '1:629918834444:web:1b6868ea1e274a3d16f329',
  measurementId: 'G-PLVE3NJ1QP',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const github = new GithubAuthProvider();
