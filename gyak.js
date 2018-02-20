let tomb = [1, 2, 3, 4, 6, 8, 9, 11, 12, 15];

let tomb1 = [1, 3, 5, 7, 8, 9]

let tomb2 = [];

let k = 0;

let j;

let i = 0;
    for (i; i < tomb[i]; i++) {
        j = 0;
    while (j < tomb1.length && tomb1[j] !== tomb[i] ) {
        j++;
    } if (j < tomb1.length) {
        tomb2[k] = tomb[i];
        k++;
    }
}
console.log(tomb2);