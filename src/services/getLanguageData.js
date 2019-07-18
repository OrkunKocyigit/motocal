const getLanguageData = function(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "langData.json", false);
    xhr.onload = () => {
        callback(JSON.parse(xhr.responseText));
    };
    xhr.send(null);
};

const doGet = function(callback) {
    getLanguageData(callback);
};

module.exports.doGet = doGet;