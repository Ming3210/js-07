let a = prompt("Khai báo mảng số nguyên")
let arr = []

for (let i = 0; i < a; i++) {
    arr[i] = prompt()
}
let max = a[0]
let min = a[0]

for (let i = 0; i < a; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log("Max  =" + max)
console.log("Min  =" + min)