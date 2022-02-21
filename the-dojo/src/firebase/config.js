import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC2RMFdWHP943XcwLI47Y5ymfoV0Z9zOms",
    authDomain: "theomasite.firebaseapp.com",
    projectId: "theomasite",
    storageBucket: "theomasite.appspot.com",
    messagingSenderId: "628918347591",
    appId: "1:628918347591:web:489cb0f2a01a55f9cd8e62"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }