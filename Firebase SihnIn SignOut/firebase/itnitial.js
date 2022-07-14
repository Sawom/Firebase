import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initialize =()=>{
    initializeApp(firebaseConfig);
}
export default initialize;