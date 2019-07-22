const {
    getArmInitialState
} = require("../armlist");
const {
    armTypes,
    skilltypes
} = require("../global_const");

const createGenerator = function* (amount, minNumber, maxNumber, skills, armType) {
    for (let i = 0; i < amount; i++) {
        let arm = getArmInitialState();
        arm.name = i.toString();
        arm.armType = armType;
        arm.considerNumberMin = minNumber;
        arm.considerNumberMax = maxNumber;
        for (let j = 1; j <= skills.length; j++) {
            arm[`skill${j}`] = skills[j - 1];
        }
        yield arm;
    }
};

const requestArmProvider = function (armType, minNumber, maxNumber, skills, amount) {
    if (amount <= 0) {
        throw "Invalid Amount";
    } else if (minNumber < 0 || minNumber > 10 || maxNumber < 0 || maxNumber > 10) {
        throw "Invalid Number";
    } else if (!Object.keys(armTypes).includes(armType)) {
        throw "Invalid Type";
    } else if (skills.length > 3 || skills.every(val => !Object.keys(skilltypes).includes(val))) {
        throw "Invalid Skills";
    }
    return createGenerator(amount, minNumber, maxNumber, skills, armType);
};

module.exports.requestArmProvider = requestArmProvider;
