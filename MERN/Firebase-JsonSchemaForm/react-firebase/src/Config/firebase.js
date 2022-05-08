import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZkULN-XDWnTXuG70NfFIGrIN053gAaHc',
  authDomain: 'user-crud-10fa6.firebaseapp.com',
  projectId: 'user-crud-10fa6',
  storageBucket: 'user-crud-10fa6.appspot.com',
  messagingSenderId: '54339946856',
  appId: '1:54339946856:web:5d81e9e1e2df57c38e6edd',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
