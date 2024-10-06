## CLI Miner for SIUU PoW on the Sui Blockchain
- [Follow me on X](https://x.com/MiningSiuuSui)
- CLI Miner:

CLI miner expects you to have node.js installed of version >= 18 [node.js](https://nodejs.org/en/download/package-manager)

```
git clone https://github.com/siuuminingpow/sui_siuu_miner.git
cd sui_siuu_miner
npm install
```

#### Run it

Miner supports SIUU coins:

```
node mine.js --chain mainnet --phrase="secretphrase/privatekey"
```

Where secretphrase is 24 words secret phrase for your wallet private key or private key in the format of "suiprivkey1....." ( you can export it from your Sui Wallet extension

Be sure you have some SUI in your wallet for the gas, 1 SUI is enough for submiting many hashes.

