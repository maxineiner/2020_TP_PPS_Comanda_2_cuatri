
var admin = require("firebase-admin");
var serviceAccount = require("./config/admin-sdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-apps---practica.firebaseio.com"
});

module.exports.admin = admin