function checkNumber(a, b, c) {
    if(a%2 == 0) alert("Số thứ 1 là số chẵn")
    else alert("Số thứ 1 là số lẻ")
    if(b%2 == 0) alert("Số thứ 2 là số chẵn")
    else alert("Số thứ 2 là số lẻ")
    if(c%2 == 0) alert("Số thứ 3 là số chẵn")
    else alert("Số thứ 3 là số lẻ")
}
let a = prompt("Nhập số thứ 1")
let b = prompt("Nhập số thứ 2")
let c = prompt("Nhập số thứ 3")
checkNumber(a,b,c)