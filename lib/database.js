import firebase from 'firebase/app'
import 'firebase/firestore'

// eslint-disable-next-line import/prefer-default-export
export function loadFirebase() {
  // Initialize Firebase
  try {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATA_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    }

    firebase.initializeApp(config)
    firebase.firestore().settings({ timestampsInSnapshots: true })
    return firebase
  } catch (error) {
    if (!/already exists/.text(error.message)) {
      console.log(`Firebase didn't initialize correctly: ${error.message}`)
    }
  }
}
