const {
    requestSummonProvider
} = require('./summonProvider.js');

jest.mock("../services/getLanguageData");

describe('#requestSummonProvider', () => {
    test('Invalid Amount', () => {
        expect(() => requestSummonProvider("","","","",-1)).toThrow();
    });

    test('Invalid Type', () => {
        expect(() => requestSummonProvider("Orkun","magna","","",1)).toThrow();
        expect(() => requestSummonProvider("magna","Orkun","","",1)).toThrow();
    });

    test('Invalid Element', () => {
        expect(() => requestSummonProvider("magna","magna","Orkun","fire",1)).toThrow();
        expect(() => requestSummonProvider("magna","magna","fire","Orkun",1)).toThrow();
    });

    test('Check amount', () => {
        expect(Array.from(requestSummonProvider("magna","magna","fire","fire",3)).length).toBe(3);
    });

    test('Check type of summon', () => {
        let summon = Array.from(requestSummonProvider("element","zeus","fire","fire",1))[0];
        expect(summon.selfSummonType).toBe("element");
        expect(summon.friendSummonType).toBe("zeus");
    });

    test('Check element of summon', () => {
        let summon = Array.from(requestSummonProvider("element","zeus","water","wind",1))[0];
        expect(summon.selfElement).toBe("water");
        expect(summon.friendElement).toBe("wind");
    });
});