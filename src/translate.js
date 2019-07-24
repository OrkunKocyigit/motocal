var React = require('react');
let getLanguageDataService = require('./services/getLanguageData').doGet;
let multiLangData;

// Language settings
module.exports.getLocale = function () {
    var lang = (
        (window.navigator.languages && window.navigator.languages[0]) ||
        window.navigator.language ||
        window.navigator.userLanguage ||
        window.navigator.browserLanguage);
    if (lang == "ja-jp" || lang == "ja-JP") lang = "ja";
    if (lang == "zh-cn" || lang == "zh-CN") lang = "zh";
    if (lang != "ja" && lang != "zh") lang = "en";

    return lang;
};

module.exports.translate = function (key, locale) {
    try {
        if (multiLangData === undefined) {
            getLanguageDataService((result) => {
                multiLangData = result;
            });
        }
        if (key == undefined || key == "") return "";
        if (locale != "ja" && locale != "en" && locale != "zh") return multiLangData[key]["ja"];

        return multiLangData[key][locale];
    } catch (e) {
        console.error("Error! Key " + key + "for language " + locale + " not found");
    }
};
