module.exports = {
  networks: {
    development: {
          host: "localhost",
          port: 8545,
          network_id: "*" // Match any network id
    },
    production:{
      host: "skasix6imhh5.eastus.cloudapp.azure.com",
      port: 8545,
      network_id: "*",
      gas: 4600000
    }
  }
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};
