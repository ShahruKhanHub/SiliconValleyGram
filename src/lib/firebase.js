// This is where our firebase lives for instagram

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file 
import {seedDatabase} from '../seed.js'

// Config file taken from firebaseConfig script 
const config = {
    apiKey: "AIzaSyCC03w-UG4Sj_gBgjLbPK_KUr5eBMyKDPA",
    authDomain: "instagram-f0087.firebaseapp.com",
    projectId: "instagram-f0087",
    storageBucket: "instagram-f0087.appspot.com",
    messagingSenderId: "12918308278",
    appId: "1:12918308278:web:31e42a59c0272ee1101517"
};

// relevant for firebase and fieldvalue from our FirebaseContext.Provider in src/index.js
// creates and initializes a firebase instance 
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here want to call seed file only once 
// seedDatabase(firebase) 
export { firebase, FieldValue };
