function muveletek(a, b, c, d,) {
    return (a+b-c)/d
}

console.log(muveletek(3, 4, 5, 2));
console.log(muveletek(5, 13, 3, 5));
console.log(muveletek(33, 113, 33, 15));
console.log(muveletek(5, 23, 5, 3));
console.log(muveletek(1, 13, 4, 2));
console.log(muveletek(2,3,4,5));

function ember(firstName, lastName, age) {
    return (firstName + " " + lastName + " most " + age + " éves ")
}

console.log(ember("Ferenc", "Fábián", 11));
console.log(ember("Ferenc", "Fábián", 12));
console.log(ember("Ferenc", "Fábián", 13));
console.log(ember("Ferenc", "Fábián", 14));
console.log(ember("Ferenc", "Fábián", 15));

function tolig (n, num) {
    let i = n+num;
    while(n<(i)) {
        console.log(n);
        n++;
    }
}
tolig(8, 3);


function tolig2 (n2, num2) {
    let j = n2+num2;
    for (n2=n2; n2<j; n2++) {
        console.log(n2);
    }
}

tolig2 (1, 10);

function tolig3 (n3, num3) {
    let k = n3+num3;
    do {
        console.log(n3); n3++;
    } 
    while (n3<k);
}
tolig3 (3, 3);
console.log("innen matrix");


let matrix = [[1, 2], [3, 4], [5, 6]]

let matrix = [[1, 2, 3], [4, 5 ,6], [7, 8, 9], [10, 11, 12]]

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

function mat(matrix) {
    let sor = (matrix.length);
        for (i=0; i < matrix.length; i++) {
        var row = "";
            
        
        for (var j=0; j < matrix.length; j++) {
            row += matrix[i][j] + " "
        }
    
        console.log(row);
    }
}

mat([[5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);

function sor(tol, nyit) {
    for(h=nyit; h>0; h--) {
        console.log(tol++);
    }
 }
sor(10, 2);


function kiir(text) {
    var ab = "";
    for (i=0; i < text.length; i++) {
        ab += text[i] + " "
    }
    console.log(ab);
}
kiir(["itt", "mindenki", "nagyon", "menő"]);
