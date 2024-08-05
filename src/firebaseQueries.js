import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchData = async ( tableName ) => {
    debugger;
    const querySnapshot = await getDocs(collection(db, tableName));
    return querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }));
}