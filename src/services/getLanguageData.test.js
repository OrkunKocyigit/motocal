let getLanguageDataService = require('./getLanguageData').doGet;

jest.mock('./getLanguageData.js');

describe('#getLanguageService Tests', () => {
    let result;
    getLanguageDataService(value => result = value);
    test('Service returns result', () => {
        expect(result).toBeDefined();
        expect(typeof result).toBe("object");
    });
});
