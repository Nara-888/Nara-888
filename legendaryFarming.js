function legendaryFarming(input) {

    let keyMaterials = {
        'Shards': 0,
        'fragments': 0,
        'Motes': 0,
    }
    let junk = {};
    let legendaryItem = {
        'Shards': 'Shadowmourne',
        'fragments': 'Valanyr',
        'Motes': 'Dragonwrath'
    }

    let modifiedInput = input.split(' ');
    for (let i = 0; i < modifiedInput.length; i+=2) {
        let quantity = Number(modifiedInput[i]);
        let material = modifiedInput[i+1];
        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;
            if (keyMaterials[material]>=250) {
                console.log(`${legendaryItem[material]} obtained!`);
                keyMaterials[material] -=250;
                break;
                
            }
        }else{
            if (junk.hasOwnProperty(material)) {
                junk[material] += quantity;
            }else{
                junk[material] = quantity;
            }
        }
        
        
    }
    let sorted = Object.entries(keyMaterials)
    .sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let line of sorted) {
        console.log(`${line[0].toLocaleLowerCase()}: ${line[1]}`);
    }
    let junkSorted = Object.entries(junk).sort((a,b) => a[0].localeCompare(b[0]));
    for (let line of junkSorted) {
        console.log(`${line[0].toLocaleLowerCase()}: ${line[1]}`)
    }
    
    


    
}
//legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')