import { createInvoice } from "../../backend/lightning-api";


export default async (req, res) => {
    const {node, macaroon, memo, amount} = req.body;
    const lnResponse = await createInvoice(node, macaroon, memo, amount);

  return res.send(lnResponse.json());
};