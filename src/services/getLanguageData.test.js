const {
    doGet,
    __RewireAPI__
} = require("./getLanguageData");
const fs = require("fs");

describe('#getLanguageService Tests', () => {
    let result;
    let callback = value => result = value;
    __RewireAPI__.__Rewire__('getLanguageData', function (fn) {
        fn(JSON.parse(fs.readFileSync("langData.json").toString()));
    });
    doGet(callback);
    test('Service returns result', () => {
        expect(result).toBeDefined();
        expect(typeof result).toBe("object");
    });
    __rewire_reset_all__;
});
