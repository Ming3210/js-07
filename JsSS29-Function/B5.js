let a = prompt("mảng gồm ? phần tử")
let arr = []
let subArray = []
for (let i = 0; i < a; i++) {
    arr[i] = prompt()
}
function check(arr,b) {
    for (let i = 0; i < a; i++) {
        if(arr[i] == b){
            subArray.push(arr[i])   
        }
    }
    console.log(subArray)
}
let b = prompt("Nhập chuỗi muốn tìm")
check(arr,b)