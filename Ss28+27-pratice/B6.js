// let array = ["a", "b", "c", "d", "e", "1", "2", "3", "4", "5", "6"]
let a = prompt("mảng gồm ? phần tử")
let array = []
for (let i = 0; i < a; i++) {
    array[i] = prompt()
}
for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


console.log(Math.random(array))
console.log(array);