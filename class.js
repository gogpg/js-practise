/*console.clear();

class Dog {
    constructor(name) {
        this.name = name;
        this.boneCount = 0;
        this.sound = 'au';
    }

    sayHi() {
        return `${this.name}: Labas!`;
    }

    sayGoodbye(otherName = 'mielas drauge') {
        return `${this.name}: Iki ${otherName}!`;
    }

    voice() {
        const sound = `${this.sound} ${this.sound}`;
        return `${this.name}: ${this.capitalize(sound)}!`;
    }

    capitalize(str) {               ///visos stringo zodziu pirmos raides didziosios.
        // labas rytas -> Labas Rytas
        return str
            .split(' ')
            .map(w => this.firstLetterUp(w))
            .join(' ');
    }

    firstLetterUp(str) {             //////pirma stringo zodzio raide didzioji.
        // labas rytas -> Labas rytas
        // return str.replace(str[0], str[0].toUpperCase());
        return str[0].toUpperCase() + str.slice(1);
    }

    changeVoice(sound) {
        this.sound = sound;
    }

    newBone() {
        return `${this.name}: ${'🦴'.repeat(++this.boneCount)}!`;
    }
}

class Cat {
    constructor(name) {
        this.name = name;
        this.mouseCount = 0;
    }

    sayHi() {
        return `${this.name}: Labas!`;
    }

    sayGoodbye(otherName = 'mielas drauge') {
        return `${this.name}: Iki ${otherName}!`;
    }

    newMouse() {
        return `${this.name}: ${'🐭'.repeat(++this.mouseCount)}!`;
    }
}

const rex = new Dog('Rex');
console.log(rex.sayHi());                   // Rex: Labas!
console.log(rex.sayGoodbye('Maryte'));      // Rex: Iki Maryte!
console.log(rex.newBone());                 // Rex: 🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴🦴🦴!

console.log(rex.voice());                   // Rex: Au au!
rex.changeVoice('bark');
console.log(rex.voice());                   // Rex: Bark bark!

const rainis = new Cat('Rainis');
console.log(rainis.sayHi());                // Rainis: Labas!
console.log(rainis.sayGoodbye('Petrai'));   // Rainis: Iki Petrai!
console.log(rainis.newMouse());             // Rainis: 🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭🐭🐭!*/

console.clear(); //po kiekvieno atsinaujinimo konsole issivalo

class Dog {           //klase suo
    constructor(name) {  //vidinis klases metodas, kuris pasileidzia automatiskai, kai mes kuriame nauja tos klases objekta, kai parasome zodeli new.
        this.name = name; //priskiriame kintamaji, 'this'- zodis kreipiasi i klase.
        this.boneCount = 0; //pradineje stadijoje suo turi 0 kaulu. Globalus parametras this.boneCount, pasiekiamas apacioje esanciuose metoduose.
        this.sound = 'bark'; //pradinis suns garsas.
    }

    sayHi() {    //metodas, kuri galime priskirti konkreciam suniui.
        return `${this.name}: Labas!`  //kreipiasi i konstruktoriu, kad galetu paimti name kintamaji.
    }

    sayGoodBye(otherName = 'mielas drauge') {   //priskiriama kintamajam default reiksme, ji gali keistis, jei kvieciant funkcija joje irasysime kita kintamojo reiksme pvz rex.sayGoodBye('maryte)
        return `${this.name}: Viso gero! ${otherName}!`
    }

    voice() {                   //ima this.sound kintamaji is konstruktoriaus, default reiksme ka tik atsiradus suniui
        let a = this.sound.charAt().toUpperCase() + this.sound.slice(1)  //pakeiciu this.sound zodzio (stringo) bark pirma raide i didziaja. Iskerpu stringo pirma raide, ja padarau didziaja raide ir tada pridedu prie stringo, kurio pirmas simbolis yra iskirptas.
        return `${this.name}: ${a} ${this.sound}!`  //this.sound globalus kintamasis is construktoriaus.
    }

    changeVoice(sound) {
        this.sound = sound;  //perrasau defaultine sound reiksme.

    }

    newBone() {
        return `${this.name}: take ${'🦴'.repeat(++this.boneCount)}!`
    }
}

//const rex = new Dog('rex');     //suns klaseje sukuriame konkrecius sunis, skliausteliuose irase 'rex', ji gausime kai ivesime name i dog clase ir ji priskirsime construktoriuje.
const spike = new Dog('Spike');
const brisius = new Dog('Brisius');

//console.log(rex);
console.log(spike);
console.log(brisius);

//console.log(rex.sayHi());
console.log(spike.sayHi());
console.log(brisius.sayHi());

//console.log(rex.sayGoodBye());  //ima kintamojo reiksme, jei yra nurodyta funkcijoje sayGoodBye
console.log(spike.sayGoodBye('Maryte')); //priskyre cia reiksme, ji prisiskiria otherName kintamajam, kuri nurodeme sayGoodbye funkcijoje.
console.log(brisius.sayGoodBye());

//console.log(rex.balsas());
console.log(spike.voice('miau, miau')); //priskiriu kita reiksme, kuri pakeicia defaultine au au.
console.log(brisius.voice());

const rex = new Dog('rex');
console.log(rex);
console.log(rex.sayHi());
console.log(rex.sayGoodBye());
console.log(rex.voice());   //rex: Au au!
console.log(rex.newBone());     //rex: 🦴!
console.log(rex.newBone());     //rex: 🦴🦴!
console.log(rex.newBone());     //rex: 🦴🦴🦴!
console.log(rex.newBone());     //rex: 🦴🦴🦴🦴!
console.log(rex.voice());
rex.changeVoice('au');   //pakeiciau sound reiksme is bark i au.
console.log(rex.voice()); //pasikeicia reiksme.

//////////////////////////////////////////////////////////////////////////

class Cat {
    constructor(name) {
        this.name = name;
       this.mouseCount = 0;
        //this.sound = 'au';
    }
    sayHi() {
        return `${this.name}: 'labas!' `
    }
    sayGoodBye(otherName = 'mielas drauge') {
        return `${this.name}: Iki ${otherName}!`
    }
    newMouse() {
        return `${this.name}: take ${'🐭'.repeat(++this.mouseCount)}!`
    }
}
const rainis = new Cat('Rainis');
console.log(rainis);
console.log(rainis.sayHi());
console.log(rainis.sayGoodBye('Petrai'));
console.log(rainis.newMouse());             // Rainis: 🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭🐭!
console.log(rainis.newMouse());             // Rainis: 🐭🐭🐭🐭!

//////////////////////////////////////////////////////////////

let b = 'kiskis';                              ///paimu stringo pirma raide, pakeiciu i didziaja ir pridedu prie to pacio stringo su isimta pirma raide, ty stringas tik nuo pirmos pozicijos, 0 pozicija iskirpta..
console.log(b[0].toUpperCase() + b.slice(1));

let str = 'labas rytas'; ///stringo kintamasis
console.log(str)
console.log(str.split(' '))  //is stringo padarome masyva, ji kirte per tarpa, masyve dvireiksmes, labas ir rytas
console.log(str.split(' ').join(' ')) //masyva vel padarome stringu perkirstu per tarpa.

console.log(str.replace(str[0], str[0].toUpperCase())) //pirma stringo raide padaroma didzioji
