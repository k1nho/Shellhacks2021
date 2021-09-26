import { getInvoiceByHash } from "../../backend/lightning-api";


export default async (req, res) => {
    const {node, macaroon, hash} = req.body;
    const lnResponse = await getInvoiceByHash(node, macaroon, hash);

  return res.send(lnResponse.json());
};