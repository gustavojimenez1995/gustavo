
function mostrar() {
/* {
var ladoA=parseInt(document.getElementById("ladoA").value)
var ladoB=parseInt(document.getElementById("ladoB").value)
var angulo=document.getElementById("angulosRectos").value

            if (ladoA!=ladoB && angulo=="SI")
            {    
              alert("lado concatenado= "+ladoA+ladoB+ " la superficie del area es "+ (ladoA*ladoB))
            } else if (ladoA!=ladoB && angulo=="NO")
                    {
                    alert("lado concatenado= "+ladoA+ladoB+ " perimetro = "+ (ladoA+ladoB*2))
                    } else if (ladoA==ladoB && angulo=="SI")
                        {
                            alert("lado concatenado= "+ladoA+ladoB+" multiplicacion de lados= "+(ladoA*ladoB))
                        } else if (ladoA==ladoB && angulo=="NO")
                            {
                            alert("lado concatenado= "+ladoA+ladoB+" La suma de sus lados es"+(ladoA+ladoB))
                            }
 */ 
var ladoA
var ladoB
var angulo = document.getElementById("angulosRectos")

    ladoA = parseInt(document.getElementById("ladoA").value)
    ladoB = parseInt(document.getElementById("ladoB").value)

    while (isNaN(ladoA) || ladoA<0) {
      ladoA=parseInt(prompt("error ingrese numero valido"))
      }
    while (isNaN(ladoB) || ladoB<0) {
      ladoB=parseInt(prompt("error ingrese numero valido"))
      }
      var mensaje = "lado concatenado "+ladoA+ladoB
  if (angulo=="SI") {
    if(ladoA==ladoB){ 
    var multiplicacion=ladoA*ladoB
     mensaje+="su superficie es = "+ multiplicacion
  } else {
    mensaje+="la multiplicacion es = " + multiplicacion
  }
} else {
  if(ladoA==ladoB){
    mensaje+=" la suma de los lados es ="+(ladoA+ladoB)
  }else{
    mensaje+=" el perimetro es igual a ="+((ladoA+ladoB)*2)

  }
}

  
  alert(mensaje)
}

                      
                      




 