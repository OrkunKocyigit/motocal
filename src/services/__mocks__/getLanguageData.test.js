let getLanguageDataService = require('./getLanguageData').doGet;

describe('#getLanguageService Tests', () => {
    let result;
    getLanguageDataService(value => result = value);
    test('Service returns result', () => {
        expect(result).toBeDefined();
        expect(typeof result).toBe("object");
    });
});