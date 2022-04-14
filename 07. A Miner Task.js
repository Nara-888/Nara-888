function minerTask(input) {
    let result = {};

 for (let index = 0; index < input.length; index+=2) {
     let [resource, quantity] = [input[index], Number(input[index+1])];

     if (result.hasOwnProperty(resource)) {
        result[resource] += quantity;
     }else{
        result[resource] = quantity;
     }
     
     
     
     
 }
 for (let key in result) {
   
    console.log(`${key} -> ${result[key]}`);
 }

    
}
minerTask(['Gold','155','Silver','10','Copper','17']);
console.log("___________________");
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])