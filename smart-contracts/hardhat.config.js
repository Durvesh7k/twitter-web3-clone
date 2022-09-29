require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.2',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/D1ngNjdvElEA6ft03-uy_1p6ymmHOG-i',
      accounts: [
        'a8a523608b20501dda86d4385b02f92ae34277179ded6f4c1f6ac19779b18541',
      ],
    },
  },
}
