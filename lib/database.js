import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCxgwflrJskr7xLq48abZvgmJyu0SQ_CF8',
  authDomain: 'norc-app.firebaseapp.com',
  databaseURL: 'https://norc-app.firebaseio.com',
  projectId: 'norc-app',
  storageBucket: 'norc-app.appspot.com',
  messagingSenderId: '1044915549232',
  appId: '1:1044915549232:web:a696e465294bad41',
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
