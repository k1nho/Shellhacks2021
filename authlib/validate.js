import { db } from "../firebase";
import { getBalance } from "../backend/api-helper"
import https from "https"

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
      return getBalance(node, macaroon);
  }

  return false;
};