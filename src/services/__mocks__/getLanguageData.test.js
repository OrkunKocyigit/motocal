const {
    doGet,
} = require("./getLanguageData");

describe('#getLanguageService Tests', () => {
    let result;
    let callback = value => result = value;
    doGet(callback);
    test('Service returns result', () => {
        expect(result).toBeDefined();
        expect(typeof result).toBe("object");
    });
});
