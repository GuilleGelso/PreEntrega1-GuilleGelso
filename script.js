const prod1="Disco"
const prod2="Monitor"
const prod3="Mouse"
const prod4="Teclado"
const prod5="Pendrive"

let prec1=530
let prec2=690
let prec3=320
let prec4=420
let prec5=29





let itienda = Number(prompt("Ingrese 1 para ingresar a tienda" + "\n" + "Ingrese 2 para salir"))

if (itienda===1) {
 let compra= Number(prompt("Seleccione el producto " + "\n" + "1-" + prod1 + " " + "$" + prec1 + "\n" + "2-" + prod2 + " " + "$" + prec2 + "\n" + "3-" + prod3 + " "+ "$" + prec3 + "\n" + "4-" + prod4 + " " + "$"+ prec4 + "\n" + "5-" + prod5 + " "+ "$"+ prec5 ))
 
 
 if (compra===1){
  let compractad= Number(prompt("Ingrese cantidad"))
  let subtotal= compractad * prec1
  alert (prod1 + " "+ "$"+ subtotal)
}
  if (compra===2){
    let compractad= Number(prompt("Ingrese cantidad"))
    let subtotal= compractad * prec2
    alert (prod2 + " "+ "$"+ subtotal)   
 }

 if (compra===3){
  let compractad= Number(prompt("Ingrese cantidad"))
  let subtotal= compractad * prec3
  alert (prod3 + " "+ "$"+ subtotal)   
}

if (compra===4){
  let compractad= Number(prompt("Ingrese cantidad"))
  let subtotal= compractad * prec4
  alert (prod4 + " "+ "$"+ subtotal)   
}
 
if (compra===5){
  let compractad= Number(prompt("Ingrese cantidad"))
  let subtotal= compractad * prec5
  alert (prod5 + " "+ "$"+ subtotal)   
}
}
else {
  alert("Gracias por visitar tienda")
}



