// mod_de_base.js
// Version stable pour Sandboxels — Super Sable

// Super Sable : devient Wet Sand au contact de l'eau
elements.super_sable = {
    color: "#e6d690",
    behavior: behaviors.POWDER,
    category: "solids", // tu peux changer "special" si tu veux
    density: 1600,
    state: "solid",
    tempHigh: 1700,
    stateHigh: "glass",
    reactions: {
        "water": { elem1: "wet_sand" }
    }
};

// Wet Sand : résultat après contact avec l'eau
elements.wet_sand = {
    color: "#bfae7a",
    behavior: behaviors.POWDER,
    category: "solids",
    density: 1800,
    state: "solid"
};

// Message console pour vérifier le chargement
console.log("Mod 'Super Sable' chargé ✅");
