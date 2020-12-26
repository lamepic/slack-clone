import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDMpzEvx2Gjx33ZWUJoqzj7nRa_vRcfIsA",
  authDomain: "slack-clone-1fa9a.firebaseapp.com",
  databaseURL: "https://slack-clone-1fa9a-default-rtdb.firebaseio.com",
  projectId: "slack-clone-1fa9a",
  storageBucket: "slack-clone-1fa9a.appspot.com",
  messagingSenderId: "1001641751529",
  appId: "1:1001641751529:web:91440a8fc2c50aea41d178",
  measurementId: "G-SPLKTNJP9M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
