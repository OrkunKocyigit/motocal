let fs = require("fs");

const getLanguageData = function(callback) {
    callback(JSON.parse(fs.readFileSync("langData.json").toString()));
};

const doGet = function(callback) {
    getLanguageData(callback);
};

module.exports.doGet = doGet;
