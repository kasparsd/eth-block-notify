const Web3 = require('web3');

const web3 = new Web3('wss://mainnet.infura.io/ws');

web3.eth.subscribe('newBlockHeaders', (err, res) => {
	window.alert(`New block ${res.number} was mined by ${res.miner}`);
});

