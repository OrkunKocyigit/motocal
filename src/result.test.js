let React = require('react');
const {
    Result,
    appendPlusBonusToCharaName,
    createEnemyInfoString,
    createBuffInfoString,
    getLabelClassName
} = require('./result');

const {
    translate
} = require('./translate');

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

describe('#createEnemyInfoString', () => {
    let mockData;
    let locale = "en";

    beforeEach(() => {
        mockData = {
            "enemyDefense": 10,
            "defenseDebuff": 50,
            "retsujitsuNoRakuen": true,
            "enemyResistance": 5
        };
    });

    test('has keys', () => {
        let result = createEnemyInfoString(locale, mockData);
        expect(result.indexOf(translate("敵防御固有値", locale)) >= 0).toBeTruthy();
        expect(result.indexOf(translate("防御デバフ合計", locale)) >= 0).toBeTruthy();
        expect(result.indexOf(translate("烈日の楽園", locale)) >= 0).toBeTruthy();
        expect(result.indexOf(translate("敵非有利耐性", locale)) >= 0).toBeTruthy();
    });

    test('correct values', () => {
        let result = createEnemyInfoString(locale, mockData);
        expect(result.indexOf("10") >= 0).toBeTruthy();
        expect(result.indexOf("50%") >= 0).toBeTruthy();
        expect(result.indexOf(translate("アクティブ", locale)) >= 0).toBeTruthy();
        expect(result.indexOf("5%") >= 0).toBeTruthy();
    });

    test('inactive toggle', () => {
        mockData.retsujitsuNoRakuen = false;
        let result = createEnemyInfoString(locale, mockData);
        expect(result.indexOf(translate("無効", locale)) >= 0).toBeTruthy();
    });
});

describe('#createBuffInfoString', () => {
    let mockData;
    let locale = "en";

    beforeEach(() => {
        mockData = {
            "normalBuff": 0,
            "elementBuff": 1,
            "otherBuff": 2,
            "daBuff": 3,
            "taBuff": 4,
            "additionalDamageBuff": 5
        };
    });

    test('has keys', () => {
        let result = createBuffInfoString(locale, mockData);
        expect(result.indexOf(translate("通常バフ", locale)) >= 0).toBeTruthy();
        expect(result.indexOf(translate("属性バフ", locale)) >= 0).toBeTruthy();
        expect(result.indexOf(translate("その他バフ", locale)) >= 0).toBeTruthy();
        expect(result.indexOf(translate("DAバフ", locale)) >= 0).toBeTruthy();
        expect(result.indexOf(translate("TAバフ", locale)) >= 0).toBeTruthy();
        expect(result.indexOf(translate("追加ダメージバフ", locale)) >= 0).toBeTruthy();
    });

    test('correct values', () => {
        let result = createBuffInfoString(locale, mockData);
        expect(result.indexOf("0%") >= 0).toBeTruthy();
        expect(result.indexOf("1%") >= 0).toBeTruthy();
        expect(result.indexOf("2%") >= 0).toBeTruthy();
        expect(result.indexOf("3%") >= 0).toBeTruthy();
        expect(result.indexOf("4%") >= 0).toBeTruthy();
        expect(result.indexOf("5%") >= 0).toBeTruthy();
    });

    test('undefined values', () => {
        mockData.normalBuff = undefined;
        let result = createBuffInfoString(locale, mockData);
        expect(result.indexOf("0%") >= 0).toBeTruthy();
    });
});

describe('#getLabelClassName', () => {
    test('valid value', () => {
        expect(getLabelClassName("Orkun")).toBe("label label-Orkun");
    });
});