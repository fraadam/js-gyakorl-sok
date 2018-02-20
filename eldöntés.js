var tomb = [1, 2 , 3, 4, 5];

let i = 0;

let keres = 6;

while (i < tomb.length && tomb[i] != keres) {
    i++;
}
if (i < tomb.length) {

console.log("Van ilyen")

} else {
    console.log("nincs ilyen érték")
}
