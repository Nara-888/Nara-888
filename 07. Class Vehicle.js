class Vehicle {
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = this.parts.engine * this.parts.power;
        this.fuel = fuel
    }
    drive(loss){
        return this.fuel -= loss;
    }
}
let parts = { engine: 6, power: 100 }
//let quality = engine * power;
//et finalParts = Object.assign(parts,quality);
//console.log(finalParts);
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);