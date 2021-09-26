import { getBalance } from "../../backend/lightning-api";


export default async (req, res) => {
    const {node, macaroon} = req.body;
    const lnResponse = await getBalance(node, macaroon);

  return res.send(lnResponse.json());
};