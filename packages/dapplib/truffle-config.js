require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile prosper grace cricket bridge tattoo'; 
let testAccounts = [
"0xb1dce6ba4467e0a203dd17e6836f003ce8d494f18050d7a01a50563edf8aa42e",
"0x330ff24b6df7561cd7dc16698b0608cf252b0e0de4c240ca258de14810903036",
"0xe728c55cace41fb23b0d003773a75edfb72a7900461d23d1a3f919249f4d3ecf",
"0x2f93b73db93ef79b6476d42ec32faded2db4306fd3b31926e80ef8e46e9bd3e9",
"0x4415bcd9cb1766bdaf239484005ddda03433ea7faf0d773dbb6f85c167ecc68a",
"0x249a18a8a34cbe541e91babbc84d5aed5312fdc3976016c2468962ca2a92bf1b",
"0x7fe7bf21d5064654b92280b2e8ed9183fc29d5f168784cdee2ee2a5512c8b081",
"0x4df76ab59a8f5c83b0947cd900f75647bbffe770828e86b43d50f998ab55fcb2",
"0xdd6a182bb20ee62e59ea4e6e49fce36c28a703ac15202ab7aa8409249db9bce4",
"0x5543912bf95ed19a7037a95494895ad32fe1b803e54d327a4489010644a657f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
