import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { get, ref } from "firebase/database";

export const fetchData = async ( tableName ) => {
    // debugger;
    // const querySnapshot = await getDocs(collection(db, tableName));
    // querySnapshot.forEach(doc => {console.log(doc)});
    // return querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }));
    const dbRef = ref(db, tableName);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
        debugger;
        return Object.keys(data).map(key => ({id:key, ...data[key] }));
    }
    else {
        return [];
    }
}