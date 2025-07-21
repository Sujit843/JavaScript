let marks = [90, 80, 70,60,50];
console.log(marks);
console.log(marks[0]);

let heros = ["tony stark", "thor", "spiderman", "antman", "hulk"];
for(let i=0; i<heros.length; i++){
    console.log(heros[i]);
}

// Ques: find avg number of all marks

let marks2 = [97, 84, 44, 33, 67];

let sum =0;

for(let val of marks){
    sum = sum + val;
}
let avg = sum / marks.length;
console.log(avg);

// Ques: item offer 10% , store the final prices.

let items = [250, 600, 800, 900, 300,];

for(let val of items){
    console.log(val);
    let offer = val / 10;
    items[i] = items[i]-offer;
    console.log("value after offer", items[i]);
}

// array in methods

// 1 push(): add to end
// 2 pop(): delete from end n return
// toString(): convert array to string
// concat(): join multiple arrays n returns result
// shift(): delete from start n return (working like pop method )
// unshift(): add to start ( workin like push method)

// slice(): reurn a piece of the array
    // slice(startIndex, endIndex)

// splice(): change original array(add , remove, replace)
    //  splice(startIndex, delCount, newElement)     