import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase-config";

export function dataEntry(data, cln, uid) {
  return addDoc(collection(db, cln), {
    user_Id: uid,
    ...data,
    time: Date(serverTimestamp()).toString(),
  });
}
export function dataEntryId(data, cln, id) {
  setDoc(doc(db, cln, id), {
    ...data,
  });
}
export async function updateData(cln, id, data) {
  console.log("updating data");
  return await updateDoc(doc(db, cln, id), {
    ...data,
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

export async function deleteData(cln, id) {
  await deleteDoc(doc(db, cln, id));
}

export async function getDataId(cln, id) {
  const docRef = doc(db, cln, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("no data found");
    return null;
  }
}
export async function dataWhere(cln, condition) {
  const List = [];
  try {
    const q = query(collection(db, cln), ...condition);
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.forEach((doc) => {
      List.push({ id: doc.id, ...doc.data() });
    });
    return List;
  } catch (e) {
    console.log("error", e);
  }
}

/*export async function dataWhereReal(cln, condition) {
  const List = [];
  try {
    const q = query(collection(db, cln), ...condition);
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const List = [];
        snapshot.docs.forEach((doc) => {
          List.push({
            uid: doc.data().user_Id,
            id: doc.id,
            ...doc.data(),
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
    return { unsubscribe, List };
  } catch (e) {
    console.log("error", e);
  }
}*/

export function dateTime(date) {
  let time = Number(date.slice(16, 18));
  if (time < 12) {
    return date.slice(0, 15) + time + date.slice(19, 21) + " am";
  } else {
    return date.slice(0, 15) + "  " + (time - 12) + date.slice(18, 21) + " pm";
  }
}
