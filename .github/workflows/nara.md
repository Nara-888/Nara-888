function dungDark(array) {
    let rooms = array[0].split("|");
    
    let health = 100;
    let coins = 0;
    let areAllRoomsVisited = true;

    for(let i = 0; i < rooms.length; i ++){
        let currentRoom = rooms[i].split(' ');
       
        if(currentRoom[0] === "potion"){
            let currentHealth = currentRoom[1];
            if(health<=100 ){
                if(health + Number(currentHealth)>= 100){
                    currentHealth = 100 - health;
                    health = 100;
                }else{
                    health += Number(currentHealth)
                }
                console.log(`You healed for ${currentHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }else if(currentRoom[0] === "chest"){
            let currentCoins = Number(currentRoom[1]);
            console.log(`You found ${currentCoins} coins.`);
            coins += currentCoins;
        }else{
            let currentMonster = currentRoom[0];
            let attack = Number(currentRoom[1]);
            health -= attack;
            if(health >0){
                console.log(`You slayed ${currentMonster}.`);
            }else{
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${i+1}`); // taking the actual room number, disregarding the zero index
                areAllRoomsVisited = false;
                break;
            }

        }
    }

    if(areAllRoomsVisited){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}
        `);
    }
    
}
dungDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
