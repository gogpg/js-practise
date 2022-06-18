console.clear();

class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'au, miau';  //defaultinis naminio gyvuno garsas, jei atskirai nenurodome prie suns ir kates.
    }

    sayHi() {
        return `Hi, my name is ${this.name} and my color is ${this.color}. `
    }

    voice() {
        if (!this.sound) {    //jei prie gyvuno sound yra '', tada vykdome if salyga.
            return `${this.name}: not in the mood to talk...`;
        }

        return `${this.name}: ${this.sound}`;
    }

   

}
/////////////////////////////

class Dog extends Pet {       ////is Pet logika yra perkopijuojama i Dog su extends pagalba.
    constructor(name, color, age) {     ///individualiai klasei skirtas konstruktorius, jei paskiriame konstruktoriu, reikia nurodyti tokius pat parametrus kaip ir pagrindineje klaseje, plius darasyti ko reikia butent katei..
        super(name, color)         //cia taip pat reikia nurodyti parametrus is pagrindines klases, nes per superi perduodama info tevinei klasei.
        this.sound = '';   //jei tuscios kabutes, nenori kalbeti, jei visai nera sitos eilutes, vykdo deafaultine naminio gyvuno reiksme au miau.
        this.age = age;

    }

}

//////////////////////////////////

class Cat extends Pet {
    constructor(name, color, lives) {     ///individualiai klasei skirtas konstruktorius, jei paskiriame konstruktoriu, reikia nurodyti tokius pat parametrus kaip ir pagrindineje klaseje, plius darasyti ko reikia butent katei..
        super(name, color)         //cia taip pat reikia nurodyti parametrus is pagrindines klases, nes per superi perduodama info tevinei klasei.
        this.sound = 'Miau miau';
        this.lives = lives;
    }


}

////////////////////////////

const gyvunas = new Pet('Rikis', 'raudona');
console.log(gyvunas);
console.log(gyvunas.sayHi());

const rex = new Dog('Rex', 'black', 10);
const sniegius = new Cat('Sniegius', 'white', 8);

console.log(rex);
console.log(sniegius);
console.log(sniegius.sayHi());
console.log(rex.sayHi());
console.log(rex.voice());