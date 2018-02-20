// BETA 2
a = 4;
switch(a) {
    case 2: 
       console.log('ez ketto');
       break;
    case 4:
       console.log('ez negy');
       break;
    default:
    console.log('ez egyik sem ,mert ez',a);
}

//for / index változó, feltétel: meddig fusson, i: ciklus egxy-egy futása után mennyivel növeljük

var tomb = [1, 2, 3, 4, 5, 8];

for (var i=0; i < tomb.length; i++) { 
    console.log(tomb[i]);
}

// function

function elsofunctionom(z, u) {
    var t = z+u;
    console.log('lefut a function-om, ez az z meg az u eredménye:', t);
}
console.log('itt van a def és a meghívás között');
elsofunctionom(2, 3);
elsofunctionom(6, 7);
elsofunctionom(8, 9);

function kivonas(mibol, mit) {
    return mibol - mit;
}
console.log(kivonas(10, 5));
var megegy = 3 + kivonas(10, 5);
console.log(megegy);

