#! /usr/bin/env node
import inquirer from "inquirer";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let playername = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "write your name",
    },
]);
let opponentselection = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select opposite fighter",
        choices: ["spiderman", "batman", "godzilla"],
    },
]);
let p1 = new player(playername.name);
let o1 = new opponent(opponentselection.select);
do {
    //spiderman
    if (opponentselection.select == "spiderman") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do ?",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose, Better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose, Better luck next time");
            process.exit();
        }
    }
    //batman
    if (opponentselection.select == "batman") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do ?",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose, Better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose, Better luck next time");
            process.exit();
        }
    }
    // godzilla
    if (opponentselection.select == "godzilla") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do ?",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose, Better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You loose, Better luck next time");
            process.exit();
        }
    }
} while (true);
