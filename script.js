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

let itienda= ""
let compra= ""
let compractad= ""
let subtotal= ""
let agregar=""
let producto=""


itienda = Number(prompt("Ingrese 1 para ingresar a tienda" + "\n" + "Ingrese 2 para salir"))



  if (itienda===2 ) {
    alert ("Gracias por visitarnos")
    }
else {
  
do {
  
  
    compra= Number(prompt("Seleccione el producto " + "\n" + "1-" + prod1 + " " + "$" + prec1 + "\n" + "2-" + prod2 + " " + "$" + prec2 + "\n" + "3-" + prod3 + " "+ "$" + prec3 + "\n" + "4-" + prod4 + " " + "$"+ prec4 + "\n" + "5-" + prod5 + " "+ "$"+ prec5 ))
    compractad= Number(prompt("Ingrese cantidad"))
  
    
   
    if (compra===1){
    
      subtotal= compractad * prec1
      producto=prod1
      salida()  
    }
     
      else if  (compra===2){
        
        subtotal= compractad * prec2
        producto=prod2
        salida()    
     }
    
     else if (compra===3){
      
      subtotal= compractad * prec3
      producto=prod3
      salida()    
    }
    
      else if  (compra===4){
    
      subtotal= compractad * prec4
      producto=prod4
      salida()    
    }
     
    else if (compra===5){
    
      subtotal= compractad * prec5
      producto=prod5
      salida()  
    }

    function salida() {
      let precio=subtotal
      alert(producto + " "+ "$"+ precio)
      
    }

    agregar=Number(prompt("Ingrese 1 para Agregar" + "\n" + "Ingrese 2 para salir"))
 
  

} while (agregar===1 ){
  
  if (agregar===2){
    alert("Gracias por su compra")
   }
}
}

console.log("salida")



