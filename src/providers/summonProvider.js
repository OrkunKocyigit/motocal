const {
    getSummonInitialState
} = require("../summon");

const {
    summonTypes,
    summonElementTypes
} = require("../global_const");


const createGenerator = function*(amount, ownType, ownElement, friendType, friendElement) {
    for (let i = 0; i < amount; i++) {
        let summon = getSummonInitialState();
        summon.selfSummonType = ownType;
        summon.selfElement = ownElement;
        summon.friendSummonType = friendType;
        summon.friendElement = friendElement;
        yield summon;
    }
};

const requestSummonProvider = function (ownType, friendType, ownElement, friendElement, amount) {
    if (amount <= 0) {
        throw "Invalid Amount";
    } else if (!Object.keys(summonTypes).includes(ownType) || !Object.keys(summonTypes).includes(friendType)) {
        throw "Invalid type";
    } else if (!Object.keys(summonElementTypes).includes(ownElement) || !Object.keys(summonElementTypes).includes(friendElement)) {
        throw "Invalid element";
    }

    return createGenerator(amount, ownType, ownElement, friendType, friendElement);
};

module.exports.requestSummonProvider = requestSummonProvider;