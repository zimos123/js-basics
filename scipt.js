console.groupCollapsed('fdsgfdfsg');

var vardas ="steve";
let pavarde ="doe";
let miestas ="vilnius"
const asmensKodas = 35494964561432;
let yraStudentas = false; 
let amzius = 25;

console.log(vardas);
console.log(pavarde);
console.log(miestas);
console.log(asmensKodas);

console.log('hello, ' + vardas + '.');

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.');



console.log("Taht's my car.");


let num1 = 22;
let num2 = 10;


console.log(num1 + num2 - num2);

console.log(10 == 10);
console.log('vienas' == 'vienas');

console.log(10 === '10');

console.log(10 != 10);

console.log(!true);
console.log(!!true);

console.groupEnd();

let originalLight = 'BLUE'
let light = originalLight.toLowerCase();

console.log(light);


if (light === 'green' || light === 'GREEN') {
    console.log('galima eiti');
} else if (light === 'yellow') {
    console.log('pasiruosti');
} else if (light === 'red') {
    console.log('stop');
} else {
    console.log('sugedo')
}

let age = 125;

console.log(age)

if (age >= 18 && age < 120) {
    console.log('bilieta galima pirkti');
} else if (age >= 16 && age < 18) {
    console.log('bilieta pirkti galima su tevais');
} else if (age > 120) {
    console.log('amzius per didelis');    
} else if (age < 0) {
    console.log('amzius per mazas');    
}
 else {
    console.log('pirkti negalima')
 }


let password = 'asdggdgfgdgddfg';
console.log(password.trim());
console.log(password.length);

if (password.length < 16) {
    console.log('slaptazodis per trumpas');
} else {
    if (password.length > 20) {
        console.log('slaptazodis tinkamas')
    } else {
        console.log('slaptazodis tinkamas, rekomend butu 21 ilgio')
    }
}

