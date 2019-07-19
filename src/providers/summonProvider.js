const {
    getInitialState
} = require("../summon").Summon;

const {
    summonTypes,
    summonElementTypes
} = require("../global_const");


const requestSummonProvider = function* (ownType, friendType, ownElement, friendElement, amount) {
    if (amount <= 0) {
        throw new Error("Invalid Amount");
    } else if (!Object.keys(summonTypes).includes(ownType) || !Object.keys(summonTypes).includes(friendType)) {
        throw new Error("Invalid type");
    } else if (!Object.keys(summonElementTypes).includes(ownElement) || !Object.keys(summonElementTypes).includes(friendElement)) {
        throw new Error("Invalid element");
    }

    for (let i = 0; i < amount; i++) {
        let summon = getInitialState();
        summon.selfSummonType = ownType;
        summon.selfElement = ownElement;
        summon.friendSummonType = friendType;
        summon.friendElement = friendElement;
        yield summon;
    }
};