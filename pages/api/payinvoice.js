import { payInvoice } from "../../backend/lightning-api";


export default async (req, res) => {
    const {node, macaroon, targetPubKey, amount, hash, request} = req.body;
    const lnResponse = await payInvoice(node, macaroon, targetPubKey, amount, hash, request);

  return res.send(lnResponse.json());
};