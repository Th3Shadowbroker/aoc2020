//Don't say anything! I were in a hurry!

const fs = require("fs");

console.log(`Advent of Code 2020 - Day 1`);

const inputs = String(fs.readFileSync("./inputs.txt")).split("\n").map(se => Number.parseInt(se));

function matches(needle, ...values) {
    return values.reduce( (result, currentValue) => result + currentValue ) === needle;
}

function getRemainingNumbers(current, all) {
    return all.filter(i => i !== current);
}

function solvePartOne(inputs) {
    for (input of inputs) {
        const match = getRemainingNumbers(input, inputs).find(rn => matches(2020, input, rn));
        if (match) {
            console.log(`${input} + ${match} = ${input + match}!`);
            console.log(`That means, that ${input * match} is the solution!`);
            return;
        }
    }

    console.error("Well...Seems something's wrong here oO!");
}

function solvePartTwo(inputs) {
    for (num1 of inputs) {
        const remainingNum1 = getRemainingNumbers(input, inputs);
        for (num2 of remainingNum1) {
            const match = getRemainingNumbers(num2, remainingNum1).find(rn => matches(2020, num1, num2, rn));
            if (match) {
                console.log(`${num1} + ${num2} + ${match} = ${num1 + num2 + match}!`);
                console.log(`That means, that ${num1 * num2 * match} is the solution!`);
                return;
            }
        }
    }

    console.error("Well...Seems something's wrong here oO!");
}

solvePartOne(inputs);
solvePartTwo(inputs);