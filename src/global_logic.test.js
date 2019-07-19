const {
    getTypeBonus,
    calcDefenseDebuff,
    calcLBHaisuiValue,
    isDarkOpus,
    calcOugiFixedDamage,
    sum,
    filterCombinations,
    calcRawDamage,
    calcRawOugiDamage,
    calcOugiDamage,
    calcChainDamageLimit,
    calcDamageWithoutCritical,
    calcAttackDamage
} = require('./global_logic.js');
const {
    LIMIT
} = require('./global_const');

jest.mock("./services/getLanguageData");

describe('#getTypeBonus', () => {
    test('when self element and enemy element is not set, type bonus is 1', () => {
        expect(getTypeBonus(undefined, undefined)).toBe(1)
    });
});

describe('#calcDamageWithoutCritical', () => {
    test('Zeroes', () => {
        expect(calcDamageWithoutCritical(0, 5, 1, 0, 0,0,0)).toBe(0);
        expect(calcDamageWithoutCritical(10, 5, 0, 0, 0,0,0)).toBe(0);
    });

    test('Ones', () => {
        expect(calcDamageWithoutCritical(1, 1, 1, 0, 0,0,0)).toBe(1);
    });
});

describe('#calcAttackDamage', () => {
    test('Zeroes', () => {
        expect(calcAttackDamage(0, 5, 1, 1, 0,0,0,0)).toBe(0);
        expect(calcAttackDamage(10, 5, 0, 1, 0,0,0,0)).toBe(0);
        expect(calcAttackDamage(10, 5, 1, 0, 0,0,0,0)).toBe(0);
    });

    test('Ones', () => {
        expect(calcAttackDamage(10, 10, 1, 1, 0,0,0,0)).toBe(1);
    });
});

describe('#calcChainDamageLimit', () => {
    test('Zeroes', () => {
        expect(calcChainDamageLimit(0, 1,0,0)).toBe(0);
        expect(calcChainDamageLimit(0, 0,1,0)).toBe(0);
    });

    test('Ones', () => {
        expect(calcChainDamageLimit(100, 1,0,0)).toBe(Math.min(1, LIMIT.chainDamageLimit));
        expect(calcChainDamageLimit(100, 0,1,0)).toBe(Math.min(1, LIMIT.chainDamageLimit));
        expect(calcChainDamageLimit(0, 100,1,0)).toBe(Math.min(1, LIMIT.chainDamageLimit));
        expect(calcChainDamageLimit(0, 1,100,0)).toBe(Math.min(1, LIMIT.chainDamageLimit));
    });

    test('Limit Test', () => {
        expect(calcChainDamageLimit(9999, 9999,9999,0)).toBe(LIMIT.chainDamageLimit);
    });

    test('Zenith Test', () => {
        expect(calcChainDamageLimit(0, 1,0,1234)).toBe(1234);
    });
});

describe('#calcRawDamage', () => {
    test('Zeroes', () => {
        expect(calcRawDamage(0, 5, 1, 1)).toBe(0);
        expect(calcRawDamage(10, 5, 0, 1)).toBe(0);
        expect(calcRawDamage(10, 5, 1, 0)).toBe(0);
    });

    test('Ones', () => {
        expect(calcRawDamage(1, 1, 1, 1)).toBe(1);
    });
});

describe('#calcOugiDamage ', () => {
    test('Bonus plain damage', () => {
        expect(calcOugiDamage(0,0,1,0,0)).toBe(0);
        expect(calcOugiDamage(0,0,1,0,1000)).toBe(1000);
    });
});

describe('#calcRawOugiDamage', () => {
    test('Zeroes', () => {
        expect(calcRawOugiDamage(0,0,1,1,1,undefined,1)).toBe(2000);
        expect(calcRawOugiDamage(0,1,1,0,1,undefined,1)).toBe(2000);
        expect(calcRawOugiDamage(0,1,1,1,1,undefined,0)).toBe(2000);
    });

    test('Ones', () => {
        expect(calcRawOugiDamage(0,1,1,1,1,"Djeeta",1)).toBe(3001);
        expect(calcRawOugiDamage(0,1,1,1,1,"Orkun",1)).toBe(2001);
    });
});

describe('#calcDefenseDebuff', () => {
    test('when enemyDefense and defenseDebuff is not set, defense is 10', () => {
        expect(calcDefenseDebuff(undefined, undefined)).toBe(10);
    });

    test('when enemyDefense is not set, the default value is 10', () => {
        expect(calcDefenseDebuff(undefined, 0)).toBe(10);
        expect(calcDefenseDebuff(undefined, 50)).toBe(5);
    });

    test('when defenseDebuff is not set, the default value is 0', () => {
        expect(calcDefenseDebuff(10, undefined)).toBe(10);
        expect(calcDefenseDebuff(20, undefined)).toBe(20);
    });

    test('when defenseDebuff was negative numbers, defense is up', () => {
        expect(calcDefenseDebuff(10, -50)).toBe(15);
    });

    test('when defense debuff is over 100, defense is 1', () => {
        expect(calcDefenseDebuff(10, 100)).toBe(1);
    });
});


describe('#calcLBHaisui', () => {
    const haisui = calcLBHaisuiValue.bind(null, 'EXLBHaisui');
    const konshin = calcLBHaisuiValue.bind(null, 'EXLBKonshin');

    const exlbHaisuiMaxTable = [
        [1, 0.05],
        [2, 0.06],
        [3, 0.075],
        [4, 0.09],
        [5, 0.10],
        [6, 0.11],
        [7, 0.12],
        [8, 0.125],
        [9, 0.1375],
        [10, 0.15],
    ];
    const exlbHaisuiMinTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const exlbKonshinMaxTable = [
        [1, 0.03],
        [2, 0.04],
        [3, 0.05],
        [4, 0.06],
        [5, 0.07],
        [6, 0.08],
        [7, 0.09],
        [8, 0.10],
        [9, 0.11],
        [10, 0.12],
    ];
    const exlbKonshinMinTable = [
        [1, 0.01],
        [2, 0.01],
        [3, 0.02],
        [4, 0.02],
        [5, 0.03],
        [6, 0.03],
        [7, 0.03],
        [8, 0.04],
        [9, 0.04],
        [10, 0.04],
    ];

    test.each(exlbHaisuiMaxTable)('Haisui slv%d max is %d', (amount, expected) => {
        expect(haisui(amount, 0.0)).toBeCloseTo(expected);
    });

    test.each(exlbHaisuiMinTable)('Haisui slv%d min is 0.01 (until HP 75.1%)', (amount) => {
        expect(haisui(amount, 1.0)).toBeCloseTo(0.01);
        expect(haisui(amount, 0.751)).toBeCloseTo(0.01);
    });

    test.each(exlbKonshinMaxTable)('konshin slv%d max is %d', (amount, expected) => {
        expect(konshin(amount, 1.0)).toBeCloseTo(expected);
    });

    test.each(exlbKonshinMinTable)('konshin slv%d min is %d', (amount, expected) => {
        expect(konshin(amount, 0.0)).toBeCloseTo(expected);
    });

    test('ignore unknown type arguments', () => {
        expect(calcLBHaisuiValue('unknown-type', 10, 0.0)).toBeCloseTo(0.0);
    });

    test('illegal amount numbers return 0.0', () => {
        expect(haisui(0, 0.0)).toBeCloseTo(0.0);
        expect(haisui(11, 0.0)).toBeCloseTo(0.0);
        expect(konshin(0, 0.0)).toBeCloseTo(0.0);
        expect(konshin(11, 0.0)).toBeCloseTo(0.0);
    });

    test.skip('illegal remainHP return ?', () => {
        // TODO: what illegal remainHP should return?
    });
});


describe('#isDarkOpus', () => {
    test('Checking Dark Opus arm', () => {
        expect(isDarkOpus({"name": "絶対否定の剣"})).toBeTruthy();
        expect(isDarkOpus({"name": "Sword of Renunciation"})).toBeTruthy();
        expect(isDarkOpus({"name": "永遠拒絶の槍"})).toBeTruthy();
        expect(isDarkOpus({"name": "Scythe of Repudiation"})).toBeTruthy();
        expect(isDarkOpus({"name": "Katana of Renunciation.Lvl185.Sl18+78"})).toBeTruthy();
        expect(isDarkOpus({"name": "永遠拒絶の杖Lv.26SLv.6+17"})).toBeTruthy();
    });

    test('Checking invalid arms', () => {
        expect(isDarkOpus(undefined)).toBeFalsy();
        expect(isDarkOpus({})).toBeFalsy();
        expect(isDarkOpus({"name": ""})).toBeFalsy();
        expect(isDarkOpus({"name": undefined})).toBeFalsy();
    });

    test('Checking non dark opus arms', () => {
        expect(isDarkOpus({"name": "Ultima Bow"})).toBeFalsy();
        expect(isDarkOpus({"name": "バハムートソード・フツルスLv.60SLv.4+13"})).toBeFalsy();
        expect(isDarkOpus({"name": "Katana of Repudiatio"})).toBeFalsy();
        expect(isDarkOpus({"name": "永遠拒絶大鎌"})).toBeFalsy();
        expect(isDarkOpus({"name": "Katana f Repudiation"})).toBeFalsy();
        expect(isDarkOpus({"name": "遠拒絶の太刀"})).toBeFalsy();
        expect(isDarkOpus({"name": "Staff of Repudition"})).toBeFalsy();
        expect(isDarkOpus({"name": "絶対力定の竪琴"})).toBeFalsy();
        expect(isDarkOpus({"name": "Staff of epudiation"})).toBeFalsy();
    });

});

describe('#calcOugiFixedDamage', () => {
    test('ougi fixed damage for Djeeta is 3000', () => {
        expect(calcOugiFixedDamage("Djeeta")).toBe(3000);
    });

    test('ougi fixed damage for others is 2000', () => {
        expect(calcOugiFixedDamage("test")).toBe(2000);
    });

    test('ougi fixed damage for empty key is 2000', () => {
        expect(calcOugiFixedDamage("")).toBe(2000);
    });
});

describe('#sum', () => {
    let testArray1 = [1, 2, 3, 4];
    let testArray2 = [-1, 0, 1, 0];
    let testArray3 = ['a', 'b', 'c', 'd'];

    test('Checking valid array totals', () => {
        expect(sum(testArray1)).toBe(10);
        expect(sum(testArray2)).toBe(0);
    });

    test('Checking invalid array totals', () => {
        expect(sum(testArray3)).toBeNaN();
    });
});

describe('#filterCombinations', () => {
    let testArray1 = [[0, 0, 0, 1]];
    let testArray2 = [[1, 1, 2, 3], [2, 1, 2, 2], [0, 3, 0, 3], [], [0, 0, 0, 0], [6, 0, 0, 1]];
    let result1 = [];
    let result2 = [[1, 1, 2, 3], [2, 1, 2, 2], [6, 0, 0, 1]];

    test('RuleMaxSize disabled', () => {
        expect(filterCombinations(testArray1, 2, false)).toStrictEqual(testArray1);
    });

    test('Filtering lower size combinations', () => {
        expect(filterCombinations(testArray1, 2, true)).toStrictEqual(result1);
        expect(filterCombinations(testArray2, 7, true)).toStrictEqual(result2);
    });
});