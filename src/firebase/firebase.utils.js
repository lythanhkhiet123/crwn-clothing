import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCLhLpOO1XllBcd5dZUGq6gVRnLyNQp08c',
  authDomain: 'crwn-db-1b98c.firebaseapp.com',
  projectId: 'crwn-db-1b98c',
  storageBucket: 'crwn-db-1b98c.appspot.com',
  messagingSenderId: '57009837264',
  appId: '1:57009837264:web:8917ae96f668a9a0583ad5',
  measurementId: 'G-R09ZX7WF6G',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
