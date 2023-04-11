import fs from "fs";

for (let i = 1; i < 21; i++) {
    fs.mkdirSync(`${i}`);
    fs.writeFileSync(
        `${i}/apps.css`,
        `.allcollections_Collection_3IWn-:nth-child(${i}) .allcollections_CollectionImage_2ERAQ { display: none; } .allcollections_Collection_3IWn-:nth-child(${i}) { background-image: url('https://cdn-icons-png.flaticon.com/512/5996/5996803.png'); background-size: 160px; background-repeat: no-repeat; background-position: center; }`
    );
    fs.writeFileSync(
        `${i}/gba.css`,
        `.allcollections_Collection_3IWn-:nth-child(${i}) .allcollections_CollectionImage_2ERAQ { display: none; } .allcollections_Collection_3IWn-:nth-child(${i}) { background-image: url('https://cdn-icons-png.flaticon.com/512/668/668859.png'); background-size: 160px; background-repeat: no-repeat; background-position: center; }`
    );
    fs.writeFileSync(
        `${i}/nds.css`,
        `.allcollections_Collection_3IWn-:nth-child(${i}) .allcollections_CollectionImage_2ERAQ { display: none; } .allcollections_Collection_3IWn-:nth-child(${i}) { background-image: url('https://cdn-icons-png.flaticon.com/512/1373/1373601.png'); background-size: 160px; background-repeat: no-repeat; background-position: center; }`
    );
    fs.writeFileSync(
        `${i}/psp.css`,
        `.allcollections_Collection_3IWn-:nth-child(${i}) .allcollections_CollectionImage_2ERAQ { display: none; } .allcollections_Collection_3IWn-:nth-child(${i}) { background-image: url('https://cdn-icons-png.flaticon.com/512/394/394134.png'); background-size: 160px; background-repeat: no-repeat; background-position: center; }`
    );
    fs.writeFileSync(
        `${i}/sd.css`,
        `.allcollections_Collection_3IWn-:nth-child(${i}) .allcollections_CollectionImage_2ERAQ { display: none; } .allcollections_Collection_3IWn-:nth-child(${i}) { background-image: url('https://cdn-icons-png.flaticon.com/512/814/814109.png'); background-size: 160px; background-repeat: no-repeat; background-position: center; }`
    );
    fs.writeFileSync(
        `${i}/ssd.css`,
        `.allcollections_Collection_3IWn-:nth-child(${i}) .allcollections_CollectionImage_2ERAQ { display: none; } .allcollections_Collection_3IWn-:nth-child(${i}) { background-image: url('https://cdn-icons-png.flaticon.com/512/2333/2333323.png'); background-size: 160px; background-repeat: no-repeat; background-position: center; }`
    );
}
