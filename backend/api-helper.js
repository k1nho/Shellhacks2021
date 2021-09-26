import https from 'https'

export const getBalance = async (node, macaroon) => {
	const response = await fetch("/api/getbalance", {
	method: "POST",
	body: JSON.stringify({"node": node, "macaroon": macaroon }),
	headers: {
		'Content-Type': 'application/json'
	},
	agent: new https.Agent({
		rejectUnauthorized: false,
	})
	});
	return await response.json();
};

export const createInvoice = async (node, macaroon, memo, amount) => {
	const response = await fetch("/api/createinvoice", {
	method: "POST",
	body: JSON.stringify(
		{
			"node": node, 
			"macaroon": macaroon,
			"memo": memo,
			"amount": amount
		}),
	headers: {
		'Content-Type': 'application/json'
	},
	agent: new https.Agent({
		rejectUnauthorized: false,
	})
	});
	return await response.json();
};

export const payInvoice = async (node, macaroon, targetPubKey, amount, hash, request) => {
	const response = await fetch("/api/payinvoice", {
	method: "POST",
	body: JSON.stringify(
		{
			"node": node, 
			"macaroon": macaroon,
			"targetPubKey": targetPubKey,
			"amount": amount,
			"hash": hash,
			"request": request
		}),
	headers: {
		'Content-Type': 'application/json'
	},
	agent: new https.Agent({
		rejectUnauthorized: false,
	})
	});
	return await response.json();
};

export const hasInvoiceBeenPaid = async (node, macaroon, hash) => {
	const response = await fetch("/api/getinvoicebyhash", {
	method: "POST",
	body: JSON.stringify({"node": node, "macaroon": macaroon, "hash": hash }),
	headers: {
		'Content-Type': 'application/json'
	},
	agent: new https.Agent({
		rejectUnauthorized: false,
	})
	});
	const result = await response.json();
	return result.settled;
};
