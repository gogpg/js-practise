console.clear();

const numbers = [
    [1, 2, 3, 4,],
    [11, 22, 33, 44,],
    [111, 222, 333, 444,],
];

for (let i = 0; i<numbers.length; i++) { //ciklas masyve   //........Pirmas sprendimo variantas

    for (let a = 0; a< numbers[i].length; a++) { //ciklas masyvo masyvuose
        total += numbers[i][a]
    }
}
console.log(total)

// Kokia yra visu skaiciu suma?