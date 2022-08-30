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
    id: 58643,
    name: "Strength of Earth Totem",
    description: "Summons a Strength of Earth Totem with 5 health at the feet of the caster. The totem increases the strength and agility of all party and raid members within 30 yards by 155. Lasts 5 min.",
    clase: "Shaman"
  },
  {
    id: 48469,
    name: "Mark of the Wild",
    description: "Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.",
    clase: "Druid"
  },
  {
    id: 17051,
    name: "Improved Mark of the Wild",
    description: "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 40%, and increases all of your total attributes by 2%.",
    clase: "Druid",
    talent: true
  },
  {
    id: 25898,
    name: "Greater Blessing of Kings",
    description: "Gives all members of the raid or group that share the same class with the target the Greater Blessing of Kings, increasing total stats by 10% for 30 min. Players may only have one Blessing on them per Paladin at any one time.",
    clase: "Paladin"
  },
  {
    id: 48932,
    name: "Blessing of Might",
    description: "Places a Blessing on the friendly target, increasing attack power by 550 for 10 min. Players may only have one Blessing on them per Paladin at any one time.",
    clase: "Paladin"
  },
  {
    id: 20045,
    name: "Improved Blessing of Might",
    description: "Increases the attack power bonus of your Blessing of Might by 25%.",
    clase: "Paladin",
    talent: true
  },
  {
    id: 47436,
    name: "Battle Shout",
    description: "The warrior shouts, increasing attack power of all raid and party members within 30 yards by 548. Lasts 2 min.",
    clase: "Warrior"
  },
  {
    id: 12861,
    name: "Commanding Presence",
    description: "Increases the melee attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by 25%.",
    clase: "Warrior",
    talent: true
  },
  {
    id: 19506,
    name: "Trueshot Aura",
    description: "Increases the attack power of party and raid members within 100 yards by 10%.  Lasts until cancelled.",
    clase: "Hunter"
  },
  {
    id: 53138,
    name: "Abomination's Might",
    description: "Increases the attack power by 10% of party and raid members within 100 yards. Also increases your total Strength by 2%.",
    clase: "Death Knight"
  },
  {
    id: 30809,
    name: "Unleashed Rage",
    description: "Increases your expertise by 9, and increases all party and raid members' attack power by 10% while within 100 yards of the Shaman.",
    clase: "Shaman"
  },
  {
    id: 29801,
    name: "Rampage",
    description: "Increases ranged and melee critical hit chance of all party and raid members within 100 yds by 5%.",
    clase: "Warrior"
  },
  {
    id: 17007,
    name: "Leader of the Pack",
    description: "While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party and raid members within 100 yards by 5%.",
    clase: "Druid"
  },
  {
    id: 55610,
    name: "Improved Icy Talons",
    description: "Increases the melee haste of all party and raid members within 100 yds by 20% and your haste by an additional 5%.",
    clase: "Death Knight"
  },
  {
    id: 8512,
    name: "Windfury Totem",
    description: "Summons a Windfury Totem with 5 health at the feet of the caster. The totem provides 16% melee haste to all party and raid members within 30 yards. Lasts 5 min.",
    clase: "Shaman"
  },
  {
    id: 29193,
    name: "Improved Windfury Totem",
    description: "Increases the melee haste granted by your Windfury totem by 4%.",
    clase: "Shaman",
    talent: true
  },
  {
    id: 34460,
    name: "Ferocious Inspiration",
    description: "All party and raid members have all damage increased by 3% within 100 yards of your pet. In addition, increases the damage dealt by Arcane Shot and Steady Shot by 9%.",
    clase: "Hunter"
  },
  {
    id: 31869,
    name: "Sanctified Retribution",
    description: "Increases the damage caused by Retribution Aura by 50% and all damage caused by friendly targets affected by any of your Auras is increased by 3%.",
    clase: "Paladin"
  },
  {
    id: 31583,
    name: "Arcane Empowerment",
    description: "Increases the damage of your Arcane Missiles spell by an amount equal to 45% of your spell power and the damage of your Arcane Blast by 9% of your spell power. In addition, increases the damage of all party and raid members within 100 yds by 3%.",
    clase: "Mage"
  },
  {
    id: 53648,
    name: "Swift Retribution",
    description: "Your auras also increase casting, ranged and melee attack speeds by 3%.",
    clase: "Paladin"
  },
  {
    id: 48396,
    name: "Improved Moonkin Form",
    description: "Your Moonkin Aura also causes affected targets to gain 3% haste and you to gain 30% of your spirit as additional spell damage.",
    clase: "Druid"
  },
  {
    id: 32182,
    name: "Bloodlust/Heroism",
    description: "Increases melee, ranged, and spell casting speed by 30% for all party and raid members. Lasts 40 seg. After the completion of this effect, those affected will become Exhausted and unable to benefit from Heroism again for 10 min.",
    clase: "Shaman"
  },
  {
    id: 57567,
    name: "Fel Intelligence",
    description: "Increases party and raid members Intellect by 48 and Spirit by 64.",
    clase: "Warlock"
  },
  {
    id: 42995,
    name: "Arcane Intellect",
    description: "Increases the target's Intellect by 60 for 30 min.",
    clase: "Mage"
  },
  {
    id: 57722,
    name: "Totem of Wrath",
    description: "Summons a Totem of Wrath with 5 health at the feet of the caster. The totem increases spell power by 280 for all party and raid members, and increases the critical strike chance of all attacks by 3% against all enemies within 40 yards. Lasts 5 min.",
    clase: "Shaman"
  },
  {
    id: 47240,
    name: "Demonic Pact",
    description: "Increases your spell damage by 10%, and your pet's criticals apply the Demonic Pact effect to your party or raid members. Demonic Pact increases spell power by 10% of your Spell Damage for 45 seg. This effect has a 20 sec cooldown. Does not work on Enslaved demons.",
    clase: "Warlock"
  },
  {
    id: 58656,
    name: "Flametongue Totem",
    description: "Summons a Flametongue Totem with 5 health at the feet of the caster. Party and raid members within 30 yards of the totem have their spell damage and healing increased by up to 144. Lasts 5 min.",
    clase: "Shaman"
  },
  {
    id: 24907,
    name: "Moonkin Aura",
    description: "Increases spell critical chance by 5%.",
    clase: "Druid"
  },
  {
    id: 51470,
    name: "Elemental Oath",
    description: "While Clearcasting from Elemental Focus is active, you deal 10% more spell damage. In addition, party and raid members within 100 yards receive a 5% bonus to their spell critical strike chance.",
    clase: "Shaman"
  },
  {
    id: 3738,
    name: "Wrath of Air Totem",
    description: "Summons a Wrath of Air Totem with 5 health at the feet of the caster. The totem provides 5% spell haste to all party and raid members within 30 yards. Lasts 5 min.",
    clase: "Shaman"
  },
  {
    id: 48073,
    name: "Divine Spirit",
    description: "Holy power infuses the target, increasing their Spirit by 80 for 30 min.",
    clase: "Priest"
  },
  {
    id: 48161,
    name: "Power Word: Fortitude",
    description: "Power infuses the target increasing their Stamina by 165 for 30 min.",
    clase: "Priest"
  },
  {
    id: 14767,
    name: "Improved Power Word: Fortitude",
    description: "Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by 30%, and increases your total Stamina by 4%.",
    clase: "Priest",
    talent: true
  },
  {
    id: 47982,
    name: "Blood Pact",
    description: "Increases party and raid members' health by 1330.",
    clase: "Warlock"
  },
  {
    id: 18696,
    name: "Improved Imp",
    description: "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 30%.",
    clase: "Warlock",
    talent: true
  },
  {
    id: 47440,
    name: "Commanding Shout",
    description: "Increases maximum health of all party and raid members within 30 yards by 2255. Lasts 2 min.",
    clase: "Warrior"
  },
  {
    id: 48564,
    name: "Mangle",
    description: "Mangle the target for 115% normal damage plus 299 and causes the target to take 30% additional damage from bleed effects for 1 min.",
    clase: "Druid"
  },
  {
    id: 57393,
    name: "Stampede",
    description: "Your rhino slams into a nearby enemy for 182 - 246 damage, causing it to take 25% additional damage from bleed effects for 12 seg.",
    clase: "Shaman"
  },
  {
    id: 46855,
    name: "Trauma",
    description: "Your melee critical strikes increase the effectiveness of Bleed effects on the target by 30% for 1 min.",
    clase: "Warrior"
  },
  {
    id: 58413,
    name: "Savage Combat",
    description: "Increases your total attack power by 4% and all physical damage caused to enemies you have poisoned is increased by 4%.",
    clase: "Rogue"
  },
  {
    id: 29859,
    name: "Blood Frenzy",
    description: "Increases your melee attack speed by 10%. In addition your Rend and Deep Wounds abilities also increase all physical damage caused to that target by 4%.",
    clase: "Warrior"
  },
  {
    id: 20337,
    name: "Heart of the Crusader",
    description: "In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 3%.",
    clase: "Paladin"
  },
  {
    id: 58410,
    name: "Master Poisoner",
    description: "Increases the critical hit chance of all attacks made against any target you have poisoned by 3%, reduces the duration of all Poison effects applied to you by 50%, and gives Envenom a 100% chance not to consume Deadly Poison.",
    clase: "Rogue"
  },
  {
    id: 12873,
    name: "Improved Scorch",
    description: "Increases your chance to critically hit with Scorch, Fireball and Frostfire Bolt by an additional 3% and your damaging Scorch spells have a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5% and lasts 30 seg.",
    clase: "Mage"
  },
  {
    id: 28593,
    name: "Winter's Chill",
    description: "Increases your chance to critically hit with Frostbolt by an additional 3% and gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance spells will critically hit the target by 1% for 15 seg. Stacks up to 5 times.",
    clase: "Mage"
  },
  {
    id: 17803,
    name: "Improved Shadow Bolt",
    description: "Increases the damage done by your Shadow Bolt spell by 10%, and your Shadow Bolt has a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 seg.",
    clase: "Warlock"
  },
  {
    id: 33602,
    name: "Improved Faerie Fire",
    description: "Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 3%, and increases the critical strike chance of your damage spells by 3% on targets afflicted by Faerie Fire.",
    clase: "Druid"
  },
  {
    id: 33193,
    name: "Misery",
    description: "Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also increase the chance for harmful spells to hit by 3% lasting 24 seg, and increases the benefit from spell power gained by your Mind Blast, Mind Flay and Mind Sear spells by 15%.",
    clase: "Priest"
  },
  {
    id: 51161,
    name: "Ebon Plaguebringer",
    description: "Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 13% in addition to increasing disease damage taken. Improves your critical strike chance with weapons and spells by 3% at all times.",
    clase: "Death Knight"
  },
  {
    id: 48511,
    name: "Earth and Moon",
    description: "Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 13% for 12 seg. Also increases your spell damage by 6%.",
    clase: "Druid"
  },
  {
    id: 47865,
    name: "Curse of the Elements",
    description: "Curses the target for 5 min, reducing Arcane, Fire, Frost, Nature, and Shadow resistances by 165 and increasing magic damage taken by 13%. Only one Curse per Warlock can be active on any one target.",
    clase: "Warlock"
  },
  {
    id: 55754,
    name: "Acid Spit",
    description: "Your worm spits acid at an enemy, causing 124 - 176 Nature damage and reducing its armor by 10% per Acid Spit for 30 seg. Can be applied up to 2 times.",
    clase: "Hunter"
  },
  {
    id: 48669,
    name: "Expose Armor",
    description: "Finishing move that exposes the target for 30 seg, reducing armor per combo point: 5 points: 3925 armor",
    clase: "Rogue"
  },
  {
    id: 47467,
    name: "Sunder Armor",
    description: "Sunders the target's armor, reducing it by 785 per Sunder Armor and causes a high amount of threat. Threat increased by attack power. Can be applied up to 5 times. Lasts hasta que se cancela.",
    clase: "Warrior"
  },
  {
    id: 770,
    name: "Faerie Fire",
    description: "Decrease the armor of the target by 5% for 5 min. While affected, the target cannot stealth or turn invisible.",
    clase: "Druid"
  },
  {
    id: 56631,
    name: "Sting",
    description: "Your wasp stings for 64 - 86 Nature damage, and decreases the armor of the target by 5% for 20 seg. While affected, the target cannot stealth or turn invisible.",
    clase: "Hunter"
  },
  {
    id: 49904,
    name: "Icy Touch",
    description: "Chills the target for 187 to 203 Frost damage and infects them with Frost Fever, a disease that deals periodic damage and reduces melee and ranged attack speed by 14% for 15 seg. Very high threat when in Frost Presence.",
    clase: "Death Knight"
  },
  {
    id: 51456,
    name: "Improved Icy Touch",
    description: "Your Icy Touch does an additional 15% damage and your Frost Fever reduces melee and ranged attack speed by an additional 6%.",
    clase: "Death Knight",
    talent: true
  },
  {
    id: 48485,
    name: "Infected Wounds",
    description: "Your Shred, Maul, and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 50% and the attack speed by 20%. Lasts 12 seg.",
    clase: "Druid"
  },
  {
    id: 53696,
    name: "Judgements of the Just",
    description: "Reduces the cooldown of your Hammer of Justice by 10 sec, increases the duration of your Seal of Justice effect by 1 sec and your Judgement spells also reduce the melee attack speed of the target by 20%.",
    clase: "Paladin"
  },
  {
    id: 47502,
    name: "Thunder Clap",
    description: "Blasts nearby enemies increasing the time between their attacks by 10% for 30 seg and doing 300 damage to them. Damage increased by attack power. This ability causes additional threat.",
    clase: "Warrior"
  },
  {
    id: 12666,
    name: "Improved Thunder Clap",
    description: "Reduces the cost of your Thunder Clap ability by 4 rage points and increases the damage by 30% and the slowing effect by an additional 10%.",
    clase: "Warrior",
    talent: true
  },
  {
    id: 48560,
    name: "Demoralizing Roar",
    description: "The druid roars, decreasing nearby enemies' melee attack power by 408. Lasts 30 seg.",
    clase: "Druid"
  },
  {
    id: 16862,
    name: "Feral Aggression",
    description: "Increases the attack power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%.",
    clase: "Druid",
    talent: true
  },
  {
    id: 50511,
    name: "Curse of Weakness",
    description: "Target's melee attack power is reduced by 478 and armor is reduced by 5% for 2 min. Only one Curse per Warlock can be active on any one target.",
    clase: "Warlock"
  },
  {
    id: 18180,
    name: "Improved Curse of Weakness",
    description: "Increases the amount of attack power reduced by your Curse of Weakness by 20%.",
    clase: "Warlock",
    talent: true
  },
  {
    id: 47437,
    name: "Demoralizing Shout",
    description: "Reduces the melee attack power of all enemies within 10 yards by 410 for 30 seg.",
    clase: "Warrior"
  },
  {
    id: 12879,
    name: "Improved Demoralizing Shout",
    description: "Increases the melee attack power reduction of your Demoralizing Shout by 40%.",
    clase: "Warrior",
    talent: true
  },
  {
    id: 48468,
    name: "Insect Swarm",
    description: "The enemy target is swarmed by insects, decreasing their chance to hit with melee and ranged attacks by 3% and causing 1290 Nature damage over 12 seg.",
    clase: "Druid"
  },
  {
    id: 3043,
    name: "Scorpid Sting",
    description: "Stings the target, reducing chance to hit with melee and ranged attacks by 3% for 20 seg. Only one Sting per Hunter can be active on any one target.",
    clase: "Hunter"
  },
  {
    id: 53408,
    name: "Judgement of Wisdom",
    description: "Unleashes the energy of a Seal spell to judge an enemy for 20 seg, giving each attack a chance to restore 2% of the attacker's base mana. Refer to individual Seals for additional Judgement effect. Only one Judgement per Paladin can be active at any one time.",
    clase: "Paladin"
  },
  {
    id: 48160,
    name: "Vampiric Touch",
    description: "Causes 850 Shadow damage over 15 seg to your target and causes up to 10 party or raid members to gain 1% of their maximum mana per 5 sec when you deal damage from Mind Blast. In addition, if the Vampiric Touch is dispelled it will cause 1360 damage to the afflicted target.",
    clase: "Priest"
  },
  {
    id: 31878,
    name: "Judgements of the Wise",
    description: "Your damaging Judgement spells have a 100% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 seg, and to immediately grant you 25% of your base mana.",
    clase: "Paladin"
  },
  {
    id: 54118,
    name: "Improved Soul Leech",
    description: "Your Soul Leech effect also restores mana to you and your summoned demon equal to 2% of maximum mana, and has a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of maximum mana per 5 sec. Lasts for 15 seg.",
    clase: "Warlock"
  },
  {
    id: 44561,
    name: "Enduring Winter",
    description: "Increases the duration of your Summon Water Elemental spell by 15 sec and your Frostbolt spell has a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 5 sec for 15 seg. This effect cannot occur more often than once every 6 sec.",
    clase: "Mage"
  },
  {
    id: 53292,
    name: "Hunting Party",
    description: "Increases your total Agility by an additional 3%, and your Arcane Shot, Explosive Shot and Steady Shot critical strikes have a 100% chance to grant up to 10 party or raid members mana regeneration equal to 1% of the maximum mana per 5 sec. Lasts for 15 seg.",
    clase: "Hunter"
  },
  {
    id: 48936,
    name: "Blessing of Wisdom",
    description: "Places a Blessing on the friendly target, restoring 92 mana every 5 seconds for 10 min. Players may only have one Blessing on them per Paladin at any one time.",
    clase: "Paladin"
  },
  {
    id: 20245,
    name: "Improved Blessing of Wisdom",
    description: "Increases the effect of your Blessing of Wisdom spell by 20%.",
    clase: "Paladin",
    talent: true
  },
  {
    id: 58774,
    name: "Mana Spring Totem",
    description: "Summons a Mana Spring Totem with 5 health at the feet of the caster for 5 min that restores 91 mana every 5 seconds to all party and raid members within 30 yards.",
    clase: "Shaman"
  },
  {
    id: 16190,
    name: "Mana Tide Totem",
    description: "Summons a Mana Tide Totem with 10% of the caster's health at the feet of the caster for 12 sec that restores 6% of total mana every 3 seconds to group members within 30 yards.",
    clase: "Shaman"
  },
  {
    id: 64901,
    name: "Hymn of Hope",
    description: "Restores 3% mana to 3 nearby low mana friendly party or raid targets every 2 sec for 8 seg, and increases their total maximum mana by 20% for 8 seg. Maximum of 12 mana restores. The Priest must channel to maintain the spell.",
    clase: "Priest"
  },
  {
    id: 47536,
    name: "Rapture",
    description: "When your Power Word: Shield is completely absorbed or dispelled you are instantly energized with 2% of your total mana, and you have a 66% chance to energize your shielded target with 2% total mana, 8 rage, 16 energy or 32 runic power. This effect can only occur once every 12 seg.",
    clase: "Priest"
  },
  {
    id: 48539,
    name: "Revitalize",
    description: "Your Rejuvenation and Wild Growth spells have a 5% chance to restore 8 Energy, 4 Rage, 1% Mana or 16 Runic Power per tick.",
    clase: "Druid"
  },
  {
    id: 29166,
    name: "Innervate",
    description: "Causes the target to regenerate mana equal to 225% of the casting Druid's base mana pool over 10 seg.",
    clase: "Druid"
  },
  {
    id: 20271,
    name: "Judgement of Light",
    description: "Unleashes the energy of a Seal spell to judge an enemy for 20 seg, granting attacks made against the judged enemy a chance of healing the attacker for 2% of their maximum health. Refer to individual Seals for additional Judgement effect. Only one Judgement per Paladin can be active at any one time.",
    clase: "Paladin"
  },
  {
    id: 34297,
    name: "Improved Leader of the Pack",
    description: "Your Leader of the Pack ability also causes affected targets to heal themselves for 2% of their total health when they critically hit with a melee or ranged attack. The healing effect cannot occur more than once every 6 sec. In addition, you gain 4% of your maximum mana when you benefit from this heal.",
    clase: "Druid"
  },
  {
    id: 15286,
    name: "Vampiric Embrace",
    description: "Fills you with the embrace of Shadow energy, causing you to be healed for 15% and other party members to be healed for 3% of any single-target Shadow spell damage you deal for 30 min.",
    clase: "Priest"
  },
  {
    id: 53527,
    name: "Divine Guardian",
    description: "When Divine Sacrifice is activated, your party and raid members within 30 yards take 10% reduced damage for 6 seg. In addition, increases the duration of your Sacred Shield by 50% and the amount absorbed by 10%.",
    clase: "Paladin"
  },
  {
    id: 25899,
    name: "Greater Blessing of Sanctuary",
    description: "Gives all members of the raid or group that share the same class with the target the Greater Blessing of Sanctuary, reducing damage taken from all sources by 3% for 30 min and increasing strength and stamina by 10%. In addition, when the target blocks, parries, or dodges a melee attack the target will gain 2% of maximum displayed mana. Players may only have one Blessing on them per Paladin at any one time.",
    clase: "Paladin"
  },
  {
    id: 37274,
    name: "Power Infusion",
    description: "Infuses the target with power, increasing their spell damage and healing by 20%. Lasts 15 seg.",
    clase: "Priest"
  },
  {
    id: 57933,
    name: "Tricks of the Trade",
    description: "The current party or raid member becomes the target of your Tricks of the Trade. The threat caused by your next attack and all actions taken for 6 seg afterwards will be transferred to the target. In addition, all damage caused by the target is increased by 15% during this time.",
    clase: "Rogue"
  },
  {
    id: 49016,
    name: "Hysteria",
    description: "Induces a friendly unit into a killing frenzy for 30 seg. The target is Enraged, which increases their physical damage by 20%, but causes them to lose health equal to 1% of their maximum health every second.",
    clase: "Death Knight"
  },
  {
    id: 54646,
    name: "Focus Magic",
    description: "Increases the target's chance to critically hit with spells by 3%. When the target critically hits the caster's chance to critically hit with spells is increased by 3% for 10 seg. Cannot be cast on self.",
    clase: "Mage"
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