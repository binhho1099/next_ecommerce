import { initializeApp, getApp } from 'firebase/app';
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
  appId: '1:629918834444:web:1d0115cb617878fd16f329',
  measurementId: 'G-4W2GR7E1YB',
};

const createFirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch (err) {
    return initializeApp(config);
  }
};

const firebaseApp = createFirebaseApp(firebaseConfig);

// initializeApp(firebaseConfig);

export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const github = new GithubAuthProvider();
