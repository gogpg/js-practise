console.clear();

console.log('standartiniai reiksmu is masyvo istraukimo budai')

const daiktai = ['jungiklis', 'durys', 'lenta', 'tapetas', 'nuotrauka'];

const pirmas = daiktai[0];  //istraukiame pirma reiksme is masyvo
const antras = daiktai[1];  ///antra reiksme is masyvo
const likeDaiktai = [daiktai[2], daiktai[3], daiktai[4]];  //issitrukiame visas kitas reiksmes, jei masyvas neilgas ir baigtinis.
console.log(likeDaiktai)

const visiKiti = [];        //likusios masyvo reiksmiu masyvas, gaunamas kitokiu budu, sukant cikla.

for (let i = 2; i < daiktai.length; i++) {    //jei masyvas nera baigtinis, gali pildytis, tada visus kitus galima rasti sukant cikla. pries tai susikure kintamaji tuscia masyva visikiti, kur sudesime visas kitas masyvo reiksmes.
    visiKiti.push(daiktai[i]);
}

console.log(pirmas);
console.log(antras);
console.log(visiKiti);

console.log('--------destrukturizacija-----------------')

const [first, second, ...other] = daiktai; ///destrukturizacija, gaunamos reiksmes priskiriant jiems kintamaji. ...other - visos kitos like reiksmes.
                                           //dstrukturizacijos metu kuriame naujus kintamuosius, kuriu pavadinimai yra nurodyti (first, second ir tt) ir tiems kintamiesiems reiksmes yra paimamos is destrukturizuoto 'daiktai' masyvo atitinkamu vietu.
                                            //spred operatorius ...other surenka visas kitas reiksmes, jei ju reikia.

console.log(first);  //destrukturizacijos budu surandamos reiksmes masyve.
console.log(second);
console.log(other);

console.log('---------destrukturizacija---------------------')


const response = [true, 'Per trumpas'];   ///masyvas su dviem reiksmem.

// const err = response[0];    //standartiniu budu gaunamos reiksmes.
// const msg = response[1];

const [err, msg] = response;   ///destrukturizacijos budu gaunamos reiksmes is karto joms priskiriant kintamaji. Pirmajam masyvo nariui priskiria kintamaji err, antram nariui priskiriamas kintamasis msg.

console.log(err);
console.log(msg);

console.log('##################  Objekto destrukturizavimas');


const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    phone: 481565415,
    email: 'petras@petras.petras',
}

// const name = person.name;   //standartiniu budu istraukiamos reiksmes is objekto.
// const age = person.age;
// const isMarried = person.isMarried;

const { age, name, ...personOtherInfo } = person;  //destrukturizacijos budu randamos reiksmes masyve, joms priskiriant is karto kintamaji., taip pat panaudotas spread operatorius likusioms reiksmems gauti.

console.log(name); 
console.log(age);
console.log(personOtherInfo);  //priskirtas likusioms reiksmems kintamasis, per kuri matome tas reiksmes.