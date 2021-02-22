import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOmcW70H9dcHXSat-aM3epklwFNfjtAKo",
    authDomain: "task-421f4.firebaseapp.com",
    projectId: "task-421f4",
    storageBucket: "task-421f4.appspot.com",
    messagingSenderId: "840157206453",
    appId: "1:840157206453:web:8d10733a2744f8ddfd6bfc"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)