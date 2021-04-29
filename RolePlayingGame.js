const readlineSync = require('readline-sync');

const name = readlineSync.question("What is your name? ");

readlineSync.question("Hello " + name + ", Welcome to Mortal Kombat! Where you will test your might. PRess ENTER to begin.");

const badGuys = ["Shang Tsung", "Kintaro", "Goro", "Kano", "Sindel", "Mileena", "Sheeva", "Sektor"];
const weapons = ["Sword", "Shield", "Amulet", "Knives", "Missiles", "War Hammer"];
var prize = [];
let userHealth = 60;
const options = ["Walk", "Exit", "Print"];
let pickUp = weapons[Math.floor(Math.random()*weapons.length)];

function game() {
    const attackPower = Math.floor(Math.random() * (5 - 4 + 8) + 12);
    const badGuy = badGuys[Math.random(Math.random() * badGuys.length)];
    let badGuysHealth = 60;
    const badGuysPower = Math.floor(Math.random() * (5 - 1 + 4) + 16);

    const index = readlineSync.keyInSelect(options, "What will you do next?");

    if (options[index] == "Exit") {
        return userHealth = 0;
    } else if (options[index] == "Print") {
        console.log(name + `: \n` + userHealth + `\nWeapons` + pickUp);
    } else if (options[index] === "Walk") {
        let key = Math.random();
        if (key <= .3) {
            console.log("Walking...");
        } else if (key >= .3) {
            console.log(badGuy + " showed up.")
        }

        while (badGuysHealth > 0 && userHealth > 0) {
            const user = readlineSync.question("What do you want oto do? Enter 'r' to run or 'a' to attack");

            switch (user) {
                case 'r':
                    const run = Math.random();
                    if (run < .5) {
                        console.log("Before you run away " + badGuy + " attacks you with: " + badGuysPower);
                    } else {
                        console.log("You dodged an attack!");
                        break;
                    }

                case 'a':
                    badGuysHealth -= attackPower;
                    console.log("Yout attacked " + badGuy + " with " + attackPower + " attack power.");

                    userHealth -= badGuysPower;
                    console.log("Enemy just attacked you with: " + badGuysPower + " attack power.");

                    if (badGuysHealth <= 0) {
                        console.log("You killed " + badGuy + '.\n' + badGuy + ' left: ' + pickUp);
                        let loot = MAth.random();
                        if(loot <= .3){
                            prize.push(pickUp);
                        } else if (userHealth <= 0) {
                            console.log(badGuy + " has defeated you. You are pathetic.");
                        }
                    }
            }
        }
    }
}

while (userHealth > 0) {
    userRestore = function () {
        userActive = true;
        userHealth = 60;
    };
    userRestore();
    game();
}