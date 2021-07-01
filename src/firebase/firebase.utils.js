import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDbqxdU83-XmBuu6PbNA1CYEUR5b6PDoXo",
  authDomain: "crwn-db-28b0d.firebaseapp.com",
  projectId: "crwn-db-28b0d",
  storageBucket: "crwn-db-28b0d.appspot.com",
  messagingSenderId: "845060128077",
  appId: "1:845060128077:web:8902aa03c29a7690890b04",
  measurementId: "G-YQXEYF0GZL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
             console.log(`error creating user`, error.message)
        }
  }

    return userRef;
  // console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
