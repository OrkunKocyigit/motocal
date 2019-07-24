"use strict";


const _entries = Object.entries;

// eslint-disable-next-line no-unused-vars
const range_none = (totals, key) => [];

// no need to care isConsideredInAverage, and default for isConsideredInAverage: off case.
const range_own = (totals, key) => [[key, totals[key]]];

// no use range_custom_func because no need ".filter"
const range_all = (totals, key) => (!totals[key].isConsideredInAverage) ? range_own(totals, key) : _entries(totals);

// no use range_custom_func because need "key"
const range_others = (totals, key) => (!totals[key].isConsideredInAverage) ? range_own(totals, key) : _entries(totals).filter(([name, ]) => name !== key);

const range_Djeeta = (totals, key) => (!totals[key].isConsideredInAverage) ? range_none(totals, key) : range_own(totals, "Djeeta");


// Base filtering function takes parameter totals and key
// if totals[key].isConsideredInAverage then return range_own
const range_custom_func = (func) => (totals, key) => (!totals[key].isConsideredInAverage) ? range_own(totals, key) : _entries(totals).filter(func);

// Wrapper for range_custom_func, for simplify the function argument specs.
const range_custom = (func) => range_custom_func(([, chara]) => func(chara));


// sample filters commonly use

const range_element = (element) => range_custom(chara => chara.element === element);

Object.assign(range_element, {
    fire: range_element("fire"),
    water: range_element("water"),
    wind: range_element("wind"),
    earth: range_element("earth"),
    light: range_element("light"),
    dark: range_element("dark"),
});

// e.g. baha race check will match to "unknown", "seisho"
const range_race = (race) => range_custom(chara => chara.race === race);

Object.assign(range_race, {
    human: range_race("human"),
    erune: range_race("erune"),
    doraf: range_race("doraf"),
    havin: range_race("havin"),
    seisho: range_race("seisho"),
    unknown: range_race("unknown")
});

const range_fav = (fav) => range_custom(chara => [chara.fav1, chara.fav2].includes(fav));

Object.assign(range_fav, {
    dagger: range_fav("dagger"),
    sword: range_fav("sword"),
    spear: range_fav("spear"),
    axe: range_fav("axe"),
    wand: range_fav("wand"),
    gun: range_fav("gun"),
    fist: range_fav("fist"),
    bow: range_fav("bow"),
    music: range_fav("music"),
    katana: range_fav("katana"),
    none: range_fav("none")
});

const range_sex = (sex) => range_custom(chara => chara.sex === sex);

Object.assign(range_sex, {
    male: range_sex("male"),
    female: range_sex("female"),
    other: range_sex("other"),
});


const when_element_buff = (chara, buff) => (chara.elementBuff > 0 || buff.element > 0);


module.exports = {
    range: {
        own: range_own,
        all: range_all,
        others: range_others,
        none: range_none,
        Djeeta: range_Djeeta,

        element: range_element,
        race: range_race,
        fav: range_fav,
        sex: range_sex,

        custom: range_custom,
        custom_func: range_custom_func,
    },
    when: {
        element_buff: when_element_buff,
    }
};
