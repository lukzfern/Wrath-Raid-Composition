/**
 * @type {Buff[]}
 */
let buffs = [
  {
    id: 57623,
    name: "Horn of Winter",
    description: "The Death Knight blows the Horn of Winter, which generates 10 runic power and increases total Strength and Agility of all party or raid members within 30 yards by 155. Lasts 2 min.",
    clase: "Death Knight"
  },
  {
    id: 48932,
    name: "Blessing of Might",
    description: "Places a Blessing on the friendly target, increasing attack power by 550 for 10 min. Players may only have one Blessing on them per Paladin at any one time.",
    clase: "Paladin"
  },
  {
    id: 19506,
    name: "Trueshot Aura",
    description: "Increases the attack power of party and raid members within 100 yards by 10%. Lasts hasta que se cancela.",
    clase: "Hunter"
  },
  {
    id: 53648,
    name: "Swift Retribution",
    description: "Your auras also increase casting, ranged and melee attack speeds by 3%.",
    clase: "Paladin"
  }
];

export function getBuffs() {
  return buffs;
}

/**
 * @param {id} id
 * @returns {Buff}
 */
export function getBuff(id) {
  return buffs.find(buff => buff.id === id);
}

/**
 * @typedef {{ id: number; name: string; clase: string }} Buff
 */