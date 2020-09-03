import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJU5Ol78mZ3fA3D4lzzH7l8Fu5-f80XrU",
    authDomain: "youth-event-organizer.firebaseapp.com",
    databaseURL: "https://youth-event-organizer.firebaseio.com",
    projectId: "youth-event-organizer",
    storageBucket: "youth-event-organizer.appspot.com",
    messagingSenderId: "578818290303",
    appId: "1:578818290303:web:711c7b000fd86ee233854a",
    measurementId: "G-6824K4TPMD"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;