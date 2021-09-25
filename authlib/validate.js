import { db } from "../firebase";

export const validate = async (email) => {
  const users = await db.collection("users").where("email", "==", email).get();

  if (users.empty) {
    return true;
  }

  return false;
};
