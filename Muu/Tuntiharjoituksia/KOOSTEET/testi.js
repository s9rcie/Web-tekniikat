let numerot [3,6,4,7,8];

for (num of numerot) {
    console.log(num);
}


numerot.forEach(tool);
function tool(num) {
    console.log(num);
}

numerot.forEach(function(num) {
    console.log(num);
});


// Parametri > Nuoli > Funktio kaikki yhteen lausekkeeseen = anonyymi funktio lyhyessä muodossa (jos enemmän kun yksi rivi koodia, käytä {}:tä)
numerot.forEach( num => {
    console.log(num);
    console.log("toinen rivi");
} );


let uusiTaulu = numerot.map(function(num) {
    return num+1;
});

let uusiTaulu2 = numerot.map( num => num+1 );

let isotNumerot = numerot.filter( num => num>5 );

for (n of isotNumerot) {
    console.log(n);
}