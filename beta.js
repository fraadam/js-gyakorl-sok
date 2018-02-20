var valtozonev= 'valtozo ertek';
// integer
valtozonev= '3';
// float
valtozonev= '4.5';
// boolean
valtozonev= true;
// array
valtozonev= [1, 2, 'kutya', 'macska', true, false, 2.3];
var tombHossza= valtozonev.lenght;

// object
valtozonev= {
key: 'value',
kulcs: 'ertek',   
egy: 1,
ketto: 2,
harom: 3,
};
valtozoTipusa= typeof valtozonev;
console.log(valtozonev);
console.log(valtozonev.ketto);
console.log(valtozonev['ketto']);
console.log(tombHossza)
console.log(valtozoTipusa);

if (2 > 3) {
    console.log('ez igaz');
} else {
    console.log('ez hamis');
}

var a= 2;
var b= 3;

if (a < b) {
    console.log('a kisebb, mint b');
} else if (a == b) {
    console.log('a egyenlo b-vel');

} else {
    console.log ('a nagyobb, mint b');
}

