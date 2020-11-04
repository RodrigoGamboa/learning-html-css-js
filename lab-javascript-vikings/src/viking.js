// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        //this.damage = damage;
        //this.health -= this.damage;
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {            
        this.health -= damage;
        if(this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else { return `${this.name} has received ${damage} points of damage`; }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            return `A Saxon has died in combat`;
        } else { return `A Saxon has received ${damage} points of damage`; }
    }
}

// War
class War {    
    constructor() {        
        this.vikingArmy = [];
        this.saxonArmy = [];
    }        
    addViking(Viking) {           
        this.vikingArmy.push(Viking);                                     
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    // vikingAttack() {                        
    //    let victim = getRandom(this.saxonArmy);
    //    let victimIndex = this.saxonArmy.indexOf(victim); 
    //    let attacker = getRandom(this.vikingArmy);
    //    if(attacker.strength >= victim.health) {
    //        this.saxonArmy.splice(victimIndex, 1);
    //    }
    //    return victim.receiveDamage(attacker.strength);
        
    // }
    // saxonAttack() {        
    //     let victim = getRandom(this.vikingArmy);
    //     let victimIndex = this.vikingArmy.indexOf(victim);
    //     let attacker = getRandom(this.saxonArmy);
    //     if(attacker.strength >= victim.health) {
    //         this.vikingArmy.splice(victimIndex, 1);
    //     }
    //     return victim.receiveDamage(attacker.strength);
    // }

    attack(att, vic) {
        let victim = getRandom(vic);
        let victimIndex = vic.indexOf(victim);
        let attacker = getRandom(att);
        if(attacker.strength >= victim.health) {
            vic.splice(victimIndex, 1);
        }
        return victim.receiveDamage(attacker.strength);
    }

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if(this.vikingArmy.length === 0) { 
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >=1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

function getRandom(array) {
    let randomNum = Math.floor(Math.random() * array.length);    
    return array[randomNum];
}

let waar = new War();
let juan = new Viking("Juan", 30, 20);
let rodrigo = new Saxon(100, 50);
for(let i = 0; i < 10; i++) {
    waar.addSaxon(rodrigo);  
    waar.addViking(juan);  
}
console.log(waar);

waar.vikingAttack();

// class Rabbit {
//     constructor(type) {
//       this.type = type;
//     }
//     speak(line) {
//       console.log(`The ${this.type} rabbit says '${line}'`);
//     }
//   }
  
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// killerRabbit.speak("fasdfa");
