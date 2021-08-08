import { firebase } from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyC7PToy_wVtmkwLaBpvZEK_CPrVDiM8K6Y",
    authDomain: "ultimate-todolist-52471.firebaseapp.com",
    databaseURL: "https://ultimate-todolist-52471-default-rtdb.firebaseio.com",
    projectId: "ultimate-todolist-52471",
    storageBucket: "ultimate-todolist-52471.appspot.com",
    messagingSenderId: "642669865369",
    appId: "1:642669865369:web:9641fd87b0aa69e8f3cb08"
});
export { firebaseConfig as firebase };
