function partyTime(input) {
    
    let regularGuests = new Set();
    let vipGuests = new Set();

    while (input[0] != "PARTY") {
        let guest = input.shift();
       
        if (Number.isNaN(Number(guest[0]))) {
            regularGuests.add(guest);
        }else{
            vipGuests.add(guest);
        }
    }
    for (let guest of input) {
        
        vipGuests.delete(guest);
        regularGuests.delete(guest);
    }
    console.log(vipGuests.size + regularGuests.size);
    for (let guest of vipGuests) {
        console.log(guest);
    }
    for (let guest of regularGuests) {
        console.log(guest);
    }



    
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])