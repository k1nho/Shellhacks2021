import { db } from "../firebase";
import { getBalance } from "../backend/lightning-api";
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
	  
	  const httpsAgent = new https.Agent({
		rejectUnauthorized: false,
	  });
	
      const response = await fetch("/api/getbalance", {
        method: "POST",
        body: JSON.stringify({"node": node, "macaroon": macaroon }),
		headers: {
			'Content-Type': 'application/json'
		},
		agent: httpsAgent
      });
      return await response.json();
  }

  return false;
};