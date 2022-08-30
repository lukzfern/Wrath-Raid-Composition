/**
 * @type {Clase[]}
 */
let clases = [
    {
        id: 6,
        name: "Death Knight",
        thumb: '/images/clases/deathknight.jpg',
        specs: [
            {
                id: "dkblood",
                name: "Blood",
                thumb: "/images/specs/blood.jpg"
            },
            {
                id: "dkfrost",
                name: "Frost",
                thumb: "/images/specs/dkfrost.jpg"
            },
            {
                id: "dkunholy",
                name: "Unholy",
                thumb: "/images/specs/unholy.jpg"
            }
        ]
    },
    {
        id: 11,
        name: "Druid",
        thumb: '/images/clases/druid.jpg',
        specs: [
            {
                id: "feraldruid",
                name: "Feral",
                thumb: "/images/specs/feral.jpg"
            },
            {
                id: "beardruid",
                name: "Bear",
                thumb: "/images/specs/bear.jpg"
            },
            {
                id: "balancedruid",
                name: "Balance",
                thumb: "/images/specs/balance.jpg"
            },
            {
                id: "restodruid",
                name: "Resto",
                thumb: "/images/specs/resto.jpg"
            }
        ]
    },
    {
        id: 3,
        name: "Hunter",
        thumb: '/images/clases/hunter.jpg',
        specs: [
            {
                id: "mm",
                name: "MM",
                thumb: "/images/specs/mm.jpg"
            },
            {
                id: "bm",
                name: "BM",
                thumb: "/images/specs/bm.jpg"
            },
            {
                id: "survi",
                name: "Survi",
                thumb: "/images/specs/survi.jpg"
            }
        ]
    },
    {
        id: 8,
        name: "Mage",
        thumb: '/images/clases/mage.jpg',
        specs: [
            {
                id: "frost",
                name: "Frost",
                thumb: "/images/specs/frost.jpg"
            },
            {
                id: "arcane",
                name: "Arcane",
                thumb: "/images/specs/arcane.jpg"
            },
            {
                id: "fire",
                name: "Fire",
                thumb: "/images/specs/fire.jpg"
            }
        ]
    },
    {
        id: 2,
        name: "Paladin",
        thumb: '/images/clases/paladin.jpg',
        specs: [
            {
                id: "hpala",
                name: "Holy",
                thumb: "/images/specs/palaholy.jpg"
            },
            {
                id: "ret",
                name: "Retribution",
                thumb: "/images/specs/ret.jpg"
            },
            {
                id: "protpal",
                name: "Prot",
                thumb: "/images/specs/prot.jpg"
            }
        ]
    },
    {
        id: 5,
        name: "Priest",
        thumb: '/images/clases/priest.jpg',
        specs: [
            {
                id: "disc",
                name: "Discipline",
                thumb: "/images/specs/disci.jpg"
            },
            {
                id: "holy",
                name: "Holy",
                thumb: "/images/specs/holy.jpg"
            },
            {
                id: "shadow",
                name: "Shadow",
                thumb: "/images/specs/shadow.jpg"
            }
        ]
    },
    {
        id: 4,
        name: "Rogue",
        thumb: '/images/clases/rogue.jpg',
        specs: [
            {
                id: "combat",
                name: "Combat",
                thumb: "/images/specs/combat.jpg"
            },
            {
                id: "assa",
                name: "Assassination",
                thumb: "/images/specs/combat.jpg"
            },
            {
                id: "sub",
                name: "Subtlety",
                thumb: "/images/specs/suti.jpg"
            }
        ]
    },
    {
        id: 7,
        name: "Shaman",
        thumb: '/images/clases/shaman.jpg',
        specs: [
            {
                id: "enha",
                name: "Enha",
                thumb: "/images/specs/enha.jpg"
            },
            {
                id: "ele",
                name: "Elemental",
                thumb: "/images/specs/ele.jpg"
            },
           {
                id: "rsham",
                name: "Resto",
                thumb: "/images/specs/shamresto.jpg"
            }
        ]
    },
    {
        id: 9,
        name: "Warlock",
        thumb: '/images/clases/warlock.jpg',
        specs: [
            {
                id: "afli",
                name: "Affliction",
                thumb: "/images/specs/afli.jpg"
            },
            {
                id: "destro",
                name: "Destruction",
                thumb: "/images/specs/destro.jpg"
            },
            {
                id: "demo",
                name: "Demonology",
                thumb: "/images/specs/demo.jpg"
            }
        ]
    },
    {
        id: 1,
        name: "Warrior",
        thumb: '/images/clases/warrior.jpg',
        specs: [
            {
                id: "fury",
                name: "Fury",
                thumb: "/images/specs/fury.jpg"
            },
            {
                id: "arms",
                name: "Arms",
                thumb: "/images/specs/arms.jpg"
            },
            {
                id: "protwarrior",
                name: "Prot",
                thumb: "/images/specs/warprot.jpg"
            }
        ]
    },
];

export function getClases() {
    return clases;
}

/**
 * @param {id} id
 * @returns {Clase}
 */
export function getClase(id) {
    return clases.find(clase => clase.id === id);
}

/**
 * @typedef {{ id: number; name: string; thumb: string; specs: object}} Clase
 */