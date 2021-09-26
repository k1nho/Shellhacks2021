import { getPendingChannels } from "../../backend/lightning-api";


export default async (req, res) => {
    const {node, macaroon} = req.body;
    const lnResponse = await getPendingChannels(node, macaroon);

  return res.send(lnResponse.json());
};