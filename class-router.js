console.clear();

class Page404 {    //skirtingos klases
    render() {
        return `404 content`;
    }
}

class PageHome {    ///skirtingos klases
    render() {
        return `Home content`;
    }
}

const router = {   ///routeris, musu jau numatyti key, ka vartotojas gali suvesti ir ka tada daryti, kuria klase kviesti.
    '': PageHome,
    '404': Page404,
}

const trimmedPath = '';   ///, tai ka vartotojas suvede, vartotojo suvestas kelias. jeigu trimmedPath 404 arba nera roueryje tokio key, gaunu pageClass Page404.

let pageClass = router['404']; ///pagal nutylejima pageClass reiksme yra 404, ji bus ir tada, jei rauteryje neras raktazodzio, jei ras raktazodi, tada pageClass reiksme bus ta, kokia yra priskirta tam raktazodziui.
if (trimmedPath in router) {   //atranka ka suvede, ar yra toks dalykas routeryje ar toks router key egzistuoja, jei egzistuoja vykdo salyga, jei ne, meta defaultine priskirta.
   pageClass = router[trimmedPath];  //rodo tam key priskirta reiksme, klase.
}

const pageObj = new pageClass(); //is tos rastos klases sukurti objekta.
const HTML = pageObj.render(); //kreipiames i ta objekta, kuri gavome pageObj ir sakome jam pieskis, atsivaizduok. tas objektas generuoja savo HTML turini.

console.log(pageClass);
console.log(pageObj);
console.log(HTML);