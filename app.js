//Configuration and bootstrapping logic towards connecting our routes, connecting to database, etc

const Express = require("express");
const BodyParser = require("body-parser");
const Bitcore = require("bitcore-lib");
const Mnemonic = require("bitcore-mnemonic");
const Config = require("./config");
const Helper = require("./classes/helper");

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true}));

const mnemonic = new Mnemonic(Mnemonic.Words.SPANISH);
const master = new Bitcore.HDPrivateKey(mnemonic.toHDPrivateKey());

module.exports.helper = new Helper(Config.host, Config.bucket, Config.username, Config.password, master);

// require("./routes/account.js")(app);
// require("./routes/transciton.js")(app);
// require("./routes/utility.js")(app);

const server = app.listen(3000, () => {
    console.log("Listening at :" + server.address().port + "...");
});