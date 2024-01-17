let a = prompt("Nhập vào 1 chuỗi bất kì")
let arr = []
let i, j
for (i = 0; i < a.length; i++) {
    for (j = i + 1; j <= a.length; j++) {
        arr.push(a.slice(i, j));
    }
}


console.log("Dãy cần tìm",arr)