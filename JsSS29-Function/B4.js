function count(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            count++;
        }
    }
    console.log(count);
}
let a = prompt("Nhập vào một chuỗi:");

let b = prompt("Nhập vào một ký tự:");
let result = count(a, b);