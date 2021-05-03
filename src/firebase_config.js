import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDurHH0-owRB3WKfDk-SIgrhdmeiDGKLbE",
    authDomain: "reactjs-todo-ffec7.firebaseapp.com",
    projectId: "reactjs-todo-ffec7",
    storageBucket: "reactjs-todo-ffec7.appspot.com",
    messagingSenderId: "64488125922",
    appId: "1:64488125922:web:824f1084ec01cc0f62f5bb"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db};