const Utilities = require('./utilities');

describe("#Utility Methods", () => {
    let props = {min: "-100", max: "100"};

    describe("#parseNumberInputField", () => {
        test('NaN value ', () => {
            expect(Utilities.parseNumberInputField("abc", props)).toBe(0);
            expect(Utilities.parseNumberInputField({}, props)).toBe(0);
            expect(Utilities.parseNumberInputField([], props)).toBe(0);
        });

        test('Over Max', () => {
            expect(Utilities.parseNumberInputField("250", props)).toBe(100);
        });

        test('Under Min', () => {
            expect(Utilities.parseNumberInputField("-250", props)).toBe(-100);
        });
    });

    describe("#getLabelFromId", () => {
        test('Empty selector', () => {
            expect(Utilities.getLabelFromId([], "1")).toBe("1");
        });

        test('Empty Id', () => {
            expect(Utilities.getLabelFromId([{label: "a", id: "1"}, {label: "b", id: "2"}, {
                label: "c",
                id: "3"
            }], "")).toBe("");
        });

        test('No Match', () => {
            expect(Utilities.getLabelFromId([{label: "a", id: "1"}, {label: "b", id: "2"}, {
                label: "c",
                id: "3"
            }], "4")).toBe("4");
        });

        test('Match', () => {
            expect(Utilities.getLabelFromId([{label: "a", id: "1"}, {label: "b", id: "2"}, {
                label: "c",
                id: "3"
            }], "1")).toBe("a");
            expect(Utilities.getLabelFromId([{label: "a", id: "1"}, {label: "b", id: "2"}, {
                label: "c",
                id: "3"
            }], "2")).toBe("b");
            expect(Utilities.getLabelFromId([{label: "a", id: "1"}, {label: "b", id: "2"}, {
                label: "c",
                id: "3"
            }], "3")).toBe("c");
        });
    });

    describe("#arrayContainsValue", () => {
        let arr = ["banana", "manana", "messi", "saviola", "ronaldo"];
        test('Exact Match', () => {
            expect(Utilities.arrayContainsValue(arr, "manana")).toBeTruthy()
        });

        test('No Match', () => {
            expect(Utilities.arrayContainsValue(arr, "time")).toBeFalsy()
        });

        test('String item contains key', () => {
            expect(Utilities.arrayContainsValue(arr, "lionel messi")).toBeTruthy()
        });

        test('String key contains item', () => {
            expect(Utilities.arrayContainsValue(arr, "ola")).toBeTruthy()
        });
    });

    describe("#filterObjectsFromSave", () => {
        let save = [];

        beforeEach(() => {
            save = {
                name: "mike", surname: "tyson", body: {
                    height: "177", heightField: "heightRef",
                    weight: "86kg", weightField: "weightRef"
                }, boxerField: "boxRef", gloves: "red",
                ui: [{time: 10, timeField: "tk"}, {time: 5, timeField: "aj"}]
            };
        });

        test('Filter', () => {
            Utilities.filterObjectsFromSave(save, ["Field"]);
            expect(save.hasOwnProperty("name")).toBeTruthy();
            expect(save.hasOwnProperty("surname")).toBeTruthy();
            expect(save.body.hasOwnProperty("height")).toBeTruthy();
            expect(save.body.hasOwnProperty("heightField")).toBeFalsy();
            expect(save.body.hasOwnProperty("weight")).toBeTruthy();
            expect(save.body.hasOwnProperty("weightField")).toBeFalsy();
            expect(save.hasOwnProperty("boxerField")).toBeFalsy();
            expect(save.hasOwnProperty("gloves")).toBeTruthy();
            expect(save.ui[0].hasOwnProperty("time")).toBeTruthy();
            expect(save.ui[0].hasOwnProperty("timeField")).toBeFalsy();
            expect(save.ui[1].hasOwnProperty("time")).toBeTruthy();
            expect(save.ui[1].hasOwnProperty("timeField")).toBeFalsy();
        });
    });
});