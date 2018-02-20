
/* programozási tételek mappa, ez az összezés 

function summ(osszeg) {
    let summa = 0;

    for (i=0; i < osszeg.length; i++) {
        summa += osszeg[i];
    };  return summa;

} 

console.log(summ([1, 2, 4, 7]));

/* megszámlálás  

var tomb = [1, 2 , 3, 4];

var paros = 0;

for (i=0; i < tomb.length; i++) {
    if (tomb[i] % 2 == 0) {
        paros++;
    }
    
}

console.log(paros); 

 */

var tomb = [1, 2 , 3, 4, 5];

let i = 0

let ker = 5

while (tomb.length) {
    console.log((tomb[i]));
    i++;
}
if (i < tomb.length);

console.log("Van ilyen")

else console.log("nincs ilyen érték")
