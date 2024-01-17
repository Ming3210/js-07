let a = prompt("mảng gồm ? phần tử")
let arr = []
for (let i = 0; i < a; i++) {
    arr[i] = prompt()
}
for (let i = 0; i < a; i++) {
    if(arr[i] %2 == 1){
        arr.splice(i, 1)    
    }
}
console.log(arr)