let a = prompt("mảng gồm ? phần tử")
let arr = []
let arr2 = []
let arr1 = []
for (let i = 0; i < a; i++) {
    arr[i] = prompt()
}
for (let i = 0; i < a; i++) {
    if(arr[i] %2== 0 ){
        arr1.push(arr[i])
    }
    else if(arr[i] %2 == 1){
        arr2.push(arr[i])
    }
}
console.log("Số chẵn" , arr1)
console.log("Số lẻ" , arr2)