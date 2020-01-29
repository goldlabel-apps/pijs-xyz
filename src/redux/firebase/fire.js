import firebase from 'firebase/app';
import 'firebase/firestore';


var config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const fire = firebase.initializeApp(config);
export default fire;

const db = fire.firestore();
export { db };

    // ADD: "Anon", "WeiZang"
const avatars = [
    {
        name: `Mumma`,
        avatar: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fmumma.png?alt=media&token=c249dc5a-1f63-4780-905a-22bdfe9c9416`
    },
    {
        name: `Milky`,
        avatar: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fmilky.png?alt=media&token=3c819ee1-bdd1-43e9-a139-8f820ee5fe79`
    },
    {
        name: `Chix`,
        avatar: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fchix.png?alt=media&token=2500fbb5-b13b-4d12-8ce0-445c897c7449`
    },
    {
        name: `Hipster`,
        avatar: `https://firebasestorage.googleapis.com/v0/b/user-entity.appspot.com/o/avatars%2Fhipster.png?alt=media&token=5c0d1f60-239e-4a8f-9e27-0c670bae64dc`
    }
];
export { avatars }