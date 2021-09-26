import { getChannelBalance } from "../../backend/lightning-api";


export default async (req, res) => {
    const {node, macaroon} = req.body;
    const lnResponse = await getChannelBalance(node, macaroon);

  return res.send(lnResponse.json());
};