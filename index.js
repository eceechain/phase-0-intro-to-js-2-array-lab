let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}


function removeLastCat(name){
    cats.slice();
}

function removeFirstCat(name){
    cats.splice();
}