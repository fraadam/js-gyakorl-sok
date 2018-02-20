const kivonas = (mibol, mit) => {
    console.log('ok')
    let eredmeny = mibol - mit;
    if (mibol > mit) return eredmeny
    console.log('ok2')
    return eredmeny
}
let eredmeny = kivonas (-2,2)
console.log(eredmeny);

// while

let i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}

// for each

const ezacallbackfgv = (j) => {
    console.log(j);
}

[0,1,2,3,4,5].forEach(ezacallbackfgv);

// matrix

let matrix = [[1,2,3], [4,5,6], [7,8,9]];

console.log(matrix[2][2]);