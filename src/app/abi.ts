export const contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "shortLink",
				"type": "string"
			}
		],
		"name": "LinkDeleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "shortLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fullLink",
				"type": "string"
			}
		],
		"name": "LinkShortened",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "updatedBy",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "shortLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newFullLink",
				"type": "string"
			}
		],
		"name": "LinkUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shortLink",
				"type": "string"
			}
		],
		"name": "deleteLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "fullLinks",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shortLink",
				"type": "string"
			}
		],
		"name": "getFullLink",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "linkCreators",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shortLink",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fullLink",
				"type": "string"
			}
		],
		"name": "shortenLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shortLink",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newFullLink",
				"type": "string"
			}
		],
		"name": "updateLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
] as const