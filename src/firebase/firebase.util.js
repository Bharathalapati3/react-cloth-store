import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyAY0Q_R04VHQ7U-OiKD4vRZQQ5jF8ktSKQ",
    authDomain: "react-cloth-db.firebaseapp.com",
    databaseURL: "https://react-cloth-db.firebaseio.com",
    projectId: "react-cloth-db",
    storageBucket: "",
    messagingSenderId: "1051178597839",
    appId: "1:1051178597839:web:35062260dca87942"
      
}

export const createUserProfileDocument = async (userAuth,additionalData)=>{

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapShot =await userRef.get();
   
   if(!snapShot.exists){
       const {displayName,email} = userAuth;
       const createdAt  = new Date();

       try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
            })
       }

       catch (error) {
           console.log('error cresting user',error.message);

       }
   }
   return userRef; 
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
