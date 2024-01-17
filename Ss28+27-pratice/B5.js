let a = prompt("mảng gồm ? phần tử")
let arr = []
let count  = 0
let subarray = []

for (let i = 0; i < a; i++) {
    arr[i] = prompt()
}
for (let i = 0; i < a; i++) {
    count = 0
    for (let j = 0; j < a; j++) {
        if(arr[i] == arr[j]){
            count++
        }
    }
    if(count == 1) {
        subarray.push(arr[i])
    }
    
}
console.log(subarray)
console.log("Số đầu tiên độc nhất :" + " " + subarray[0])
