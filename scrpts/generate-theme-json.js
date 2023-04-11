import fs from "fs";

const themeJson = {
    name: "B00ste's Theme",
    author: "B00ste",
    target: "System-Wide",
    version: "v1.0",
    description: "B00ste's compilation of Steam Deck Themes",
    manifest_version: 5,
    inject: {
        "Clean Gameview/shared.css": ["SP"],
        "Colored Toggles/shared.css": ["QuickAccess", "SP", "MainMenu"],
        "Round/shared.css": ["SP", "MainMenu", "QuickAccess"],
        "Switch Like Home/shared.css": ["SP"],
        "collections.css": ["SP"],
    },
    dependencies: {},
    patches: {
        "Games Counter": {
            default: "No",
            type: "checkbox",
            values: {
                Yes: {},
                No: {
                    "no-collection-game-counter.css": ["SP"],
                },
            },
        },
        "No Friends": {
            default: "Yes",
            type: "checkbox",
            values: {
                No: {},
                Yes: {
                    "Switch Like Home/nofriends.css": ["SP"],
                },
            },
        },
        "Show Steam Cloud": {
            type: "checkbox",
            default: "No",
            values: {
                Yes: {
                    "Clean Gameview/steamcloud.css": ["SP"],
                },
                No: {},
            },
        },
        "Use Blur": {
            type: "checkbox",
            default: "Yes",
            values: {
                Yes: {
                    "Clean Gameview/blur.css": ["SP"],
                },
                No: {},
            },
        },
        Intensity: {
            default: "10px",
            type: "slider",
            values: {
                "3px": {
                    "Round/intensity/3px.css": ["SP", "MainMenu", "QuickAccess"],
                },
                "5px": {
                    "Round/intensity/5px.css": ["SP", "MainMenu", "QuickAccess"],
                },
                "10px": {
                    "Round/intensity/10px.css": ["SP", "MainMenu", "QuickAccess"],
                },
                "15px": {
                    "Round/intensity/15px.css": ["SP", "MainMenu", "QuickAccess"],
                },
                "20px": {
                    "Round/intensity/20px.css": ["SP", "MainMenu", "QuickAccess"],
                },
                "30px": {
                    "Round/intensity/30px.css": ["SP", "MainMenu", "QuickAccess"],
                },
            },
        },
        Outlines: {
            default: "Round",
            type: "dropdown",
            values: {
                Round: {
                    "Round/round-outline.css": ["SP", "MainMenu", "QuickAccess"],
                },
                Square: {},
                Hidden: {
                    "Round/hide-outline.css": ["SP", "MainMenu", "QuickAccess"],
                },
            },
        },
        "Theme Color": {
            default: "Gradient Deck",
            type: "dropdown",
            values: {
                Red: {
                    "Colored Toggles/colors/red.css": ["QuickAccess", "SP", "MainMenu"],
                },
                Orange: {},
                Yellow: {
                    "Colored Toggles/colors/yellow.css": ["QuickAccess", "SP", "MainMenu"],
                },
                Green: {
                    "Colored Toggles/colors/green.css": ["QuickAccess", "SP", "MainMenu"],
                },
                Lime: {
                    "Colored Toggles/colors/lime.css": ["QuickAccess", "SP", "MainMenu"],
                },
                Blue: {
                    "Colored Toggles/colors/blue.css": ["QuickAccess", "SP", "MainMenu"],
                },
                Indigo: {
                    "Colored Toggles/colors/indigo.css": ["QuickAccess", "SP", "MainMenu"],
                },
                Magenta: {
                    "Colored Toggles/colors/magenta.css": ["QuickAccess", "SP", "MainMenu"],
                },
                "Gradient RGB": {
                    "Colored Toggles/colors/gradient_rgb.css": ["QuickAccess", "SP", "MainMenu"],
                },
                "Gradient Deck": {
                    "Colored Toggles/colors/gradient_deck.css": ["QuickAccess", "SP", "MainMenu"],
                },
                Gray: {
                    "Colored Toggles/colors/gray.css": ["QuickAccess", "SP", "MainMenu"],
                },
                White: {
                    "Colored Toggles/colors/white.css": ["QuickAccess", "SP", "MainMenu"],
                },
                Custom: {},
            },
            components: [
                {
                    name: "Main Color",
                    type: "color-picker",
                    on: "Custom",
                    default: "#f00",
                    css_variable: "colored-toggles-main-color",
                    tabs: ["QuickAccess", "SP", "MainMenu"],
                },
                {
                    name: "Text Color",
                    type: "color-picker",
                    on: "Custom",
                    default: "#000",
                    css_variable: "colored-toggles-friends-text-color",
                    tabs: ["QuickAccess", "SP", "MainMenu"],
                },
            ],
        },
        "Collection Label": {
            default: "Unchanged",
            type: "dropdown",
            values: {
                UPPERCASE: {},
                lowercase: {
                    "Collection Label/lowercase.css": ["SP"],
                },
                Unchanged: {
                    "Collection Label/unchanged.css": ["SP"],
                },
            },
        },
        "Collection Nr. 1": {
            default: "Unchanged",
            type: "dropdown",
            values: {
                Unchanged: {},
                Apps: {
                    "Collection Icons/1/apps.css": ["SP"],
                },
                GBA: {
                    "Collection Icons/1/gba.css": ["SP"],
                },
                NDS: {
                    "Collection Icons/1/nds.css": ["SP"],
                },
                PSP: {
                    "Collection Icons/1/psp.css": ["SP"],
                },
                "SD Card": {
                    "Collection Icons/1/sd.css": ["SP"],
                },
                SSD: {
                    "Collection Icons/1/ssd.css": ["SP"],
                },
            },
        },
    },
};

for (let i = 1; i < 21; i++) {
    const values = {};
    values.Unchanged = {};
    values["Apps"] = {};
    values["Apps"][`Collection Icons/${i}/apps.css`] = ["SP"];
    values["GBA"] = {};
    values["GBA"][`Collection Icons/${i}/gba.css`] = ["SP"];
    values["NDS"] = {};
    values["NDS"][`Collection Icons/${i}/nds.css`] = ["SP"];
    values["PSP"] = {};
    values["PSP"][`Collection Icons/${i}/psp.css`] = ["SP"];
    values["SD Card"] = {};
    values["SD Card"][`Collection Icons/${i}/sd.css`] = ["SP"];
    values["SSD"] = {};
    values["SSD"][`Collection Icons/${i}/ssd.css`] = ["SP"];

    themeJson.patches[`Collection Nr. ${i}`] = {
        default: "Unchanged",
        type: "dropdown",
        values,
    };
}

fs.writeFileSync("theme.json", JSON.stringify(themeJson));
