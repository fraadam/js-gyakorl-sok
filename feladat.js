//1-2

var valtozok= {

int: 4,

float: 4.5,

string: 'johnny',

array: ['nyul', 'hal'],
    
boo: true,
};

console.log(valtozok);

//3-4

var kutyak = ['kicsi', 'nagy', 'szoros', 'csupasz']

for (var i=0; i < kutyak.length; i++) {
    console.log(kutyak[i]);
}

for (var i=0; i < kutyak.length; i++) {
    console.log(kutyak[3]);
}

// 5

function sum(a, b) {
    var t = a+b;
    console.log('lefut a function-om, ez az z meg az u eredménye:', t);
}
sum (4, 2);

function sub(a, b) {
    var t = a-b;
    console.log('lefut a function-om, ez az z meg az u eredménye:', t);
}
sub (4, 2);

function mul(a, b) {
    var t = a*b;
    console.log('lefut a function-om, ez az z meg az u eredménye:', t);
}
mul (4, 2);

function div(a, b) {
    var t = a/b;
    console.log('lefut a function-om, ez az z meg az u eredménye:', t);
}
div (4, 2);

function kiv(mibol, mit) {
    return mibol - mit;
}
console.log(kiv(10, 5));

function ossz(mibol, mit) {
    return mibol + mit;
}
console.log(ossz(10, 5));

function osz(mibol, mit) {
    return mibol / mit;
}
console.log(osz(10, 5));

function szor(mibol, mit) {
    return mibol - mit;
}
console.log(szor(10, 5));

var objektum= [console.log(kiv(10, 5)), console.log(ossz(10, 5)), console.log(osz(10, 5)), console.log(szor(10, 5))]

// 6

var objektumosdolog = {

    summa: console.log(ossz(10, 5)),

    dedukcio: console.log(kiv(10, 5)),

    multiplikacio: console.log(szor(10, 5)),

    divide: console.log(osz(10, 5)),
};
console.log(objektumosdolog)



