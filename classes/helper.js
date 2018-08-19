const Request = require("request-promise");
const UUID = require("UUID");
const Bitcore = require("bitcore-lib");

class Helper {
    constructor(host, bucket, username, password, seed) {
        // this.cluster = new Couchbase.Cluster("couchbase://" + host);
        // this.cluster.authenticate(username, password);
        // this.bucket = this.cluster.openBucket(bucket);
        this.master = seed;
    }

    //To be implemented
    createKeyPair(account){}

    getWalletBalance(addresses){}

    getAddressBalance(address){}

    getAddressUtxo(address){}

    insert(data, id = UUID.v4()) {}

    createAccount(data) {}

    addAddress(account) {}

    getAccountBalance(account) {}

    getMasterAddresses() {}

    getMasterKeyPairs() {}

    getMasterAddressWithMinimum(addresses, amount) {}

    getMasterChangeAddress() {}

    getAddresses(account) {}

    getPrivateKeyFromAddress(account, address) {}

    createTransactionFromAccount(account, source, destination, amount) {}

    createTransactionFromMaster(account, destination, amount) {}
}

module.exports = Helper;