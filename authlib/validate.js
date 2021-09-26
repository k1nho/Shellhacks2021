import { db } from "../firebase";
import { getBalance } from "../backend/lightning-api";

export const doesNotExist = async (email) => {
  const doc = await db.collection("users").doc(email).get();
  if (doc.data() === undefined) {
    return true;
  }
  return false;
};

export const hasValidMacaroon = async (email) => {
  const doc = await db.collection("users").doc(email).get();
  if (doc.data() === undefined) {
    return false;
  }
  
  const node = doc.data().resthost;
  const macaroon = doc.data().macaroon;
  
  if(node && macaroon) {
    const ret = await getBalance(node, macaroon).catch((error) => {
      console.error(error.error);
	});
	return ret;
  }

  return false;
};