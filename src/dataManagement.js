import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase-config";

export function dataEntry(data, cln, uid) {
  return addDoc(collection(db, cln), {
    user_Id: uid,
    ...data,
    time: serverTimestamp(),
  });
}

export async function getData(cln) {
  const List = [];
  const querySnapshot = await getDocs(collection(db, cln));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    List.push({ ...doc.data(), id: doc.id });
  });
  return List;
}

export async function getDataId(cln, id) {
  const docRef = doc(db, cln, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    return null;
  }
}
