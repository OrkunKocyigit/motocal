const {
    appendPlusBonusToCharaName
} = require('./result');

jest.mock("./services/getLanguageData");

describe('#getTypeBonus', () => {
    test('zero value', () => {
        expect(appendPlusBonusToCharaName("Orkun", 0)).toBe("Orkun HP");
    });

    test('positive value', () => {
        expect(appendPlusBonusToCharaName("Orkun", 10)).toBe("Orkun+10 HP");
    });

    test('negative value', () => {
        expect(appendPlusBonusToCharaName("Orkun", -10)).toBe("Orkun HP");
    });

    test('undefined value', () => {
        expect(appendPlusBonusToCharaName("Orkun", undefined)).toBe("Orkun HP");
    });
});