// mod_de_base.js
// Mod stable : Super Sable → Wet Sand

// Super Sable
elements.super_sable = {
    color: "#e6d690",
    behavior: behaviors.POWDER,
    category: "special", // tu peux changer en "solids"
    density: 1600,
    state: "solid",
    tempHigh: 1700,
    stateHigh: "glass",
    reactions: {
        "water": { elem1: "wet_sand" }
    }
};

// Wet Sand (après contact avec l'eau)
elements.wet_sand = {
    color: "#bfae7a",
    behavior: behaviors.POWDER,
    category: "special",
    density: 1800,
    state: "solid"
};

// Confirmation console
console.log("Mod 'Super Sable' chargé ✅");
