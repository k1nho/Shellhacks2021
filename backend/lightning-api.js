const request = require('request');

/**
 * Makes an API call using request.
 * @param {string} node The HTTPS address of the node's REST API endpoint.
 * @param {string} path The particular api path to invoke.
 * @param {string} macaroon The macaroon being used.  If it does not have permission the call will fail.
 * @param {string} callback A callback to process the response.
 * @param {string} body Optional json body for the api call.
 * @param {string} mthd The HTTP method.
 */
function apiCall(node, path, macaroon, callback, bdy = '', method = 'GET') {
	let options = {
		'url': node + path,
		// Work-around for self-signed certificates.
		'rejectUnauthorized': false,
		'json': true,
		'headers': {
			'Grpc-Metadata-macaroon': macaroon,
		},
		'method': method,
		'body': body
	}
	request(options, callback);	
}

export function getBalance(node, macaroon, callback) {
	apiCall(node, '/v1/balance/blockchain', macaroon, callback);
}

export function getChannelBalance(node, macaroon, callback) {
	apiCall(node, '/v1/balance/channels', macaroon, callback);
}

export function getChannels(node, macaroon, callback) {
	apiCall(node, '/v1/channels', macaroon, callback);
}

/**
 * Attempts to open a new channel.
 * @param {string} node The node REST URL
 * @param {string} macaroon The macaroon.  Should have permissions to accomplish this action.
 * @param {string} targetPubKey The public key of the target's node as a hex string.
 * @param {number} localFunding The amount of funding to be provided by the opener.
 * @param {number} pushSat An initial payment amount to the target.  May be zero.
 * @param {boolean} private If the channel is private or not.
 * @param {any} callback The callback function.
 */
export function openChannel(node, macaroon, targetPubKey, localFunding, pushSat, private, callback) {
	let body = {
		"node_pubkey": Buffer.from(targetPubKey, 'hex').toString('base64'), //API expects this as BASE64 instead of hex.
		"local_funding_amount": localFunding,
		"push_sat": pushSat,
		"target_conf": 6,
		"private": private,
		"min_htlc_msat": 20
	}
	console.log(body);
	apiCall(node, '/v1/channels', macaroon, callback, body, 'POST');
}

function getPendingChannels(node, macaroon, callback) {
	apiCall(node, '/v1/channels/pending', macaroon, callback);
}

/**
 * Creates a new invoice.  When you make an invoice, it needs to be on the node that intends to receive payment.
 * @param {string} memo A short memo to include with the invoice.  Has a char limit, not sure what it is.
 * @param {number} amount The amount (in satoshi) to invoice for.
 */
export function createInvoice(node, macaroon, memo, amount, callback) {
	let body = {
		"amount": amount,
		"memo": memo
	}
	apiCall(node, '/v1/invoices', macaroon, callback, body, 'POST');
}

/**
 * Pays an invoice.  This must be executed on the node that is paying the invoice, and there must be an open channel connection from This->Target.
 * @param {any} targetPubKey The public key of the target's node as a hex string.
 * @param {any} amount The amount to pay (should match the invoice amount)
 * @param {any} pHash The preimage hash as generated by the invoice.  BASE64 encoded.
 * @param {any} pRequest The request as generated by the invoice.
 */
export function payInvoice(node, macaroon, targetPubKey, amount, hash, request, callback) {
	let body = {
		"dest": Buffer.from(targetPubKey, 'hex').toString('base64'), //API expects this as BASE64 instead of hex.
		"amt": amount,
		"payment_hash": hash,
		"payment_request": request
	}
	apiCall(node, '/v1/channels/transactions', macaroon, callback, body, 'POST');
}

/**
 * Retrieves an invoice on this node by the payment hash.  This can be used to check if a given payment is settled or not.
 * @param {string} hash The preimage hash from the invoice in BASE64 encoding.  This actually gets translated to hex, but callers probably have it in b64.
 */
export function getInvoiceByHash(node, macaroon, hash, callback) {
	apiCall(node, 'v1/invoice/' + Buffer.from(hash, 'base64').toString('hex'), macaroon, callback);
}