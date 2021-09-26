import { openChannel } from "../../backend/lightning-api";


export default async (req, res) => {
    const {node, macaroon, targetPubKey, localFunding, pushSat, priv} = req.body;
    const lnResponse = await openChannel(node, macaroon, targetPubKey, localFunding, pushSat, priv);

  return res.send(lnResponse.json());
};