console.clear();

//callback vienas seniausiu programiniu konceptu, naudojamas, kai reikia iskvietineti testinius procesus. pvz darbui su failu sistema.

function sum(a, b, callback) {
    const ats = a + b;

    callback(ats);
}

const numbers = [
    [2, 4],
    [7, 9],
    [-8, 16],
];

for (const nums of numbers) {
    const [pirmas, antras] = nums;   ///pirmas, antras kintamieji is numbers masyvo.

    sum(        //i sumos funkcija paduodama pirmas, antras ir funkcija.
        pirmas,
        antras,
        (atsakymas) => {   //sia funkcija iskvietus, ji turi gauti atsakymas parametra
            console.log(`${pirmas} + ${antras} = ${atsakymas}`)
        }
    );
}