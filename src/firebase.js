import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCvwXcHJnYUKBND2wg1Uz6K7089pXiwC9c",
    authDomain: "spotify-clone-e41d7.firebaseapp.com",
    projectId: "spotify-clone-e41d7",
    storageBucket: "spotify-clone-e41d7.appspot.com",
    messagingSenderId: "1070851059788",
    appId: "1:1070851059788:web:d25ab97acb69c66c86c4e9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
// //database real time 
const db = firebaseApp.firestore()
// //authentification
const auth = firebase.auth()


async function signInWithAccount(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

async function createAccount(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

export { db, auth, createAccount, signInWithAccount, };