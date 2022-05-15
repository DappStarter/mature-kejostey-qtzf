require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan remember noble evil inflict permit furnace genuine'; 
let testAccounts = [
"0xa5c90c3df1b74d7bbadbd1b1e53b38451f5cac54a3b56e7a40d7c1fe9db8d9a9",
"0x44c5888a0709479455f754452a5d3be1ce5a4417175b713e23c702d378c2c8e0",
"0x83780f79037bee715cdcc77e3ffd1f0a175b23d40ec685a7557d2dc5d6711b53",
"0xca1c2a971d9fcebb5c02379df773bb3ab8a2c1afe555d2000173f690048e73bf",
"0x9f7f68a93f966851d41bb9361c57217139649f0435c465af24840f9ee60a617d",
"0x7eff36aa3dc202b715f87d9e7b277d13bad06559d06268a5f5789d9ecd114fd8",
"0x6755a6d6790d9d86b2e7db29c6ba6183bee607a56079ff040faeb56c847e9044",
"0xf2f382863dff32ef536cb0192f934fe46c3241320020b00c1d2a3811a09d99e1",
"0x2f2a9556b66271f1e19306d1395a5c8c2c234637385bd2e152ca98451725032d",
"0x37c7141748d6556e155fde15e3b35744cbd82e8fae95b25c66124cfdff87336c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

