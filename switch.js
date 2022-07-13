console.clear();

const day = 8;

switch (day) {
    case 1:
        console.log('pirmadienis');
        break;

    case 2:
        console.log('antradienis');
        break;

    case 3:
        console.log('treciadienis');
        break;

    case 4:
        console.log('ketvirtadienis');
        break;

    case 5:
        console.log('penktadienis');
        break;

    case 6:
        console.log('sestadienis');
        break;

    case 7:
        console.log('sekmadienis');
        break;

    default:
        console.log('Tokia diena neegzistuoja');
        break;
}

const weekday = 8;

switch (weekday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalis');
        break;

    default:
        console.log('Tokia diena neegzistuoja');
        break;
}
console.log('---------------')
const kavosEtapas = 3;

switch (kavosEtapas) {
    case 0:
        console.log('0) Paimam puodeli');

    case 1:
        console.log('1) Isidedam i puodeli kavos');

    case 2:
        console.log('2) Isidedam i puodeli saldiklio');

    case 3:
        console.log('3) Uzsipilame karsto vandens');

    case 4:
        console.log('4) Issimaisome turini');

    case 5:
        console.log('5) Geriam. Skanaus!');
        break;

    default:
        console.log('Toks kavos gaminimo etapas negalimas');
        break;
}

console.log('------------------------');

const stotele = 'Vasara';

switch (stotele) {
    case 'Parko':
        console.log('Parko');

    case 'Geniu':
        console.log('Geniu');

    case 'Tremtiniu':
        console.log('Tremtiniu');

    case 'Rudens':
        console.log('Rudens');

    case 'Mindaugo':
        console.log('Mindaugo');

    case 'Zalias tiltas':
        console.log('Zalias tiltas');
        break;

    case 'Lvovo':
        console.log('Lvovo');

    case 'Vasara':
        console.log('Vasara');

    case 'Rudens 2':
        console.log('Rudens');

    case 'Tremtiniu 2':
        console.log('Tremtiniu');

    case 'Parko 2':
        console.log('Parko');
        break;
}