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
});