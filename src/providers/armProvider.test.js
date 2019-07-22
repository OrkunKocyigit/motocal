const {
    requestArmProvider
} = require('./armProvider.js');

jest.mock("../services/getLanguageData");

describe('#requestArmProvider', () => {
    test('Invalid Amount', () => {
        expect(() => requestArmProvider("","","","",-1)).toThrow();
    });

    test('Invalid Number', () => {
        expect(() => requestArmProvider("",-1,"","",1)).toThrow();
        expect(() => requestArmProvider("",11,"","",1)).toThrow();
        expect(() => requestArmProvider("",1,-1,"",1)).toThrow();
        expect(() => requestArmProvider("",1,11,"",1)).toThrow();
    });

    test('Invalid Type', () => {
        expect(() => requestArmProvider("Orkun",1,1,"",1)).toThrow();
    });

    test('Invalid Skills', () => {
        expect(() => requestArmProvider("sword",1,1,["non","non","non","non"],1)).toThrow();
        expect(() => requestArmProvider("sword",1,1,["Orkun"],1)).toThrow();
    });

    test('Check amount', () => {
        expect(Array.from(requestArmProvider("sword",1,1,["non","non","non"],3)).length).toBe(3);
    });

    test('Check number of weapons', () => {
        let arm = Array.from(requestArmProvider("sword",2,3,["non","non","non"],1))[0];
        expect(arm.considerNumberMax).toBe(3);
        expect(arm.considerNumberMin).toBe(2);
    });

    test('Check type of weapon', () => {
        let arm = Array.from(requestArmProvider("sword",0,1,["non","non","non"],1))[0];
        expect(arm.armType).toBe("sword");
    });

    test('Check skills of weapon', () => {
        let arm = Array.from(requestArmProvider("sword",0,1,["normalS","normalM","normalL"],1))[0];
        expect(arm.skill1).toBe("normalS");
        expect(arm.skill2).toBe("normalM");
        expect(arm.skill3).toBe("normalL");
    });
});