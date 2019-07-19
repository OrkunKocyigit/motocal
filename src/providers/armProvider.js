const {
    getInitialState
} = require("../armlist").Arm;

const {
    armTypes,
    skilltypes
} = require("../global_const");

const requestArmProvider = function* (armType, minNumber, maxNumber, skills, amount) {
    if (amount <= 0) {
        throw "Invalid Amount";
    } else if (minNumber < 0 || minNumber > 10 || maxNumber < 0 || maxNumber > 10) {
        throw "Invalid Number";
    } else if (!Object.keys(armTypes).includes(armType)) {
        throw "Invalid Type";
    } else if (skills.length > 3 || Object.keys(armTypes).every(val =>  !Object.keys(skilltypes).includes(val))) {
        throw "Invalid Skills";
    }

    for (let i = 0; i < amount; i++) {
        let arm = getInitialState();
        arm.name = i.toString();
        arm.considerNumberMin = minNumber;
        arm.considerNumberMax = maxNumber;
        for (let j = 0; j < skills.length; j++) {
            arm[`skill${j}`] = skills[j];
        }
        yield arm;
    }
};

module.exports.requestArmProvider = requestArmProvider;