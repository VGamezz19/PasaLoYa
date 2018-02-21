import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyB-tYBHoKTlBB4KKFNabN7rGVPWEWUWsV4",
    authDomain: "pasaloy-352fc.firebaseapp.com",
    databaseURL: "https://pasaloy-352fc.firebaseio.com",
    projectId: "pasaloy-352fc",
    storageBucket: "",
    messagingSenderId: "141400614408"
  };

firebase.initializeApp(config);

export const fireAuth = firebase.auth();
export const fireDB = firebase.database();

export default firebase