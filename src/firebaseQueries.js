import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { get, ref } from "firebase/database";
import { useQuery} from "@tanstack/react-query";

export const fetchData = async ( tableName ) => {
    // debugger;
    // const querySnapshot = await getDocs(collection(db, tableName));
    // querySnapshot.forEach(doc => {console.log(doc)});
    // return querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }));
    const dbRef = ref(db, tableName);
    const snapshot = await get(dbRef);
    debugger;
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

export const fetchById = async ( tableName, id ) => {
    debugger;
    const dbRef = ref(db, tableName + "/" + id);
    const snapshot = await get(dbRef);
    debugger;
    if (snapshot.exists()) {
        return snapshot.val();
        debugger;
    }
    else {
        debugger;
        return {};
    }
}

export const useOrganizers = () => {
    return useQuery({
            queryKey: ["organizatoriFestivala"],
            queryFn: () => fetchData("organizatoriFestivala"),
          });

}

export const useSingleOrganizer = () => {
    return useQuery({
            queryKey: ["organizatorFestivala"],
            queryFn: () => fetchData("organizatorFestivala"),
          });
}


// add transformation of the object to an array in this hook
// how to transfrom data directly in the useQuery hook

export const useFestivals=(id) => {
    return useQuery({
        queryKey: ["festivali", id],
        queryFn: () => fetchById("festivali",id),
        
    });
}