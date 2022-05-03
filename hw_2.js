const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

1.
const doublearr2 = itemsObject.map(({ quantity, price }) => {
    return { quantity: quantity * 2, price: price * 2 }
});
console.log(doublearr2);


// const doublearr = itemsObject.map((item) => {
//     item.quantity *= 2;
//     item.price *= 2;
//     return item;
// });


//2.
const newarr = itemsObject.filter((item) => item.quantity > 2 && item.price > 300);

//3.
const total2 = itemsObject.reduce((total, item) => total + item.quantity * item.price, 0);



console.log("this", total2)
// console.log(doublearr2);
console.log(newarr);
// console.log(total);

const string = ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

//4.
function newstr(str) {
    let arrstr = string.split(/[ -]+/);
    arrstr.splice(0, 1);
    arrstr.pop();
    let nstr = arrstr.join(" ").toLowerCase();
    return nstr;
}

console.log(newstr(string));

// let nstr = string.split(/[ -]+/).join(" ").toLowerCase();
// let nstr = string.split(/[ -]+/).splice(1, string.length + 1).join(" ").toLowerCase();
//?

// let nstr = string.split(/[ -]+/);
// nstr.splice(0, 1);
// nstr.pop();
// let nnstr = nstr.join(" ").toLowerCase();


// console.log(nnstr);

// //3.
// const total = itemsObject.map((item) => {
//     let sum = 0;
//     sum = item.quantity * item.price;
//     return sum;
// });