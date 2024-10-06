// const argv = require('minimist')(process.argv.slice(2));

import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));

let selectedChain = argv.chain || 'local';

const settings = {
    "mainnet": {
        "phrase": "",
        "packageId": '0xa9ac245133600c1fe7fe625fa1d906a72972f0e55ae8dd462ca1c910dfc06d55',
        "configId": '0xc4e40f0793524e18595461b08aefe56d91e6c394a8facaac8df8d3576f66928c',
        "buses": [
            '0xfdef832e43e94a5256db86f1203843626afc18fdc811b000e882c6b6663a8455',
            '0xc64bce77874019e69b8e6f2fbc6b095e4d0f781a85fa0793a22190388ccc901b',
            '0xc3e1cd72459288f78dae1b4a52bed9165f4979129f784f74cd5cdd9fa5fdf5c0',
            '0x9b115de3f8efbf15feb215bae3fca678cd5446c941ab2efe70ed8937d002949d',
            '0x8e0e88eada0751534aac3e99bc01af7fbf1a08baf838a92b9f89befe6fa64f4b',
            '0x52de2eb536fda4708fd72c3f275367d15d836888f33ef75a1ea5e868dd05ffe5',
            '0x4d598658696e673a7307f3514c054e5ae66d7c38a3ff340f55d32a6c4d356fda',
            '0x0e3d08ff0a904d2c433093f63384a56ade316e953c794ff9a0bce365671527c5',
        ]
    },
    "devnet": {
        "phrase": "",
        "packageId": '0x91cc121a7f83d9948981742d7acfed60032657615cc55251f88ca32d4ed1e5ff',
        "configId": '0xf09fcf672013598009a3d543b16fbfc86cbfc175ab8bb46905438861491f010d',
        "buses": [
            '0xf27bcf49bf18ba88d9e17375dd5f01217b86f625752a516052e1500bfbe0042c',
            '0xce254ef252c048599ed536d64a4dc6a47dbb0e02f686e23de07b99ff872ed8e7',
            '0xc08fbe29887776a63599dc4c686bb438f8cc9cf2b888c8571f7c355c7b372930',
            '0x9c946053d2f39c1cc9b4187bfbf4abea5b793cdf0b271ec091a608465449d1b1',
            '0x9bd80abb251e041891aaa1836f223912c3fac1a310ca769457d8f8fa8ee113f4',
            '0x79384618a955763c05bb60213ddb2c34c3e54b21647c1a6da9aa96ee9e14a9cc',
            '0x58edbf273afdaf5c9bc2429e3af4018b852ad409109ad42350e4489d4890b9c3',
            '0x026b7da69e2528e9d422e23e31860ec6c48b72d46eb140a1297573dd75993913',
        ]
    },
};


settings[selectedChain].chain = selectedChain;
if (argv.phrase) {
    settings[selectedChain].phrase = argv.phrase;
}

export default  settings[selectedChain];
