var szemadat = ["K Béla","Szeged", "1990.12.08", 035123123]

function getNev(szemadat) {
    return szemadat[0];
}


function getszulAdatok(szemadat) {
    return szemadat[1] + ", " + szemadat[2];
}

function getTaj(szemadat) {
    return szemadat[3];
}
console.log(getNev(szemadat));
console.log(getszulAdatok(szemadat));
console.log(getTaj(szemadat));

function write(szemadat) {
    return (getNev(szemadat)) + ", " + (getszulAdatok(szemadat)) + ", " + (getTaj(szemadat));
}
console.log(write(szemadat));



var egyenlegZoli = 0

var egyenlegBela = 0

var a = 0


function penz(a) {
    console.log(a);
}

function inc(egyenleg, a) {
    console.log(egyenleg + a)

}

function dec(egyenleg, a) {
    console.log(egyenleg - a)
}
penz(a);
inc(egyenlegZoli, 10);
dec(egyenlegZoli, 7);
dec(egyenlegBela, 6);
inc(egyenlegBela, 5)



function incdec(egyenlegZoli, egyenlegBela, a) {
    res1 = dec(egyenlegZoli, a)
    res2 = inc(egyenlegBela, a)
    return [res1, res2]
}

incdec(10, -7, 8) 


var egyenlegZoli = 0

var egyenlegBela = 0



function penz(a) {
    console.log(a);
}

function inc(egyenleg, a) {
    return egyenleg + a

}

function dec(egyenleg, a) {
    return egyenleg - a
}
console.log(inc(egyenlegZoli, 10));
console.log(dec(egyenlegZoli, 7));
console.log(dec(egyenlegBela, 6)); 
console.log(inc(egyenlegBela, 5));








