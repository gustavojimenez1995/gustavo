function mostrar()
{

    var paises
    var habitantes
    var temperatura
    var respuesta;
    var temperaturasImpares=0
    var masHabitantes
    var paisMasPoblado;
    var paisesMenos20=0

    var acumuladorHabitantes=0
    var contadorHabitantes=0

    var maximaTemperatura
    var paisMasTemperatura

    var respuesta="."

    while (respuesta!="no") {
        paises=prompt("nombre del pais")

        habitantes=parseInt(prompt("cantidad de habitantes"))
        while (habitantes<0 || habitantes>270) {
            habitantes=parseInt(prompt("error ingrese entre 0 y 270"))}
        temperatura=parseInt(prompt("temperatura"))
            while (temperatura<-50 || temperatura>50) {
                temperatura=parseInt(prompt("error ingrese entre -50 y 50 "))}
               
         respuesta=prompt("desea seguir?")

        if (temperatura%2!==0) {
            temperaturasImpares++;}

            if (habitantes<masHabitantes) {
                masHabitantes=habitantes}
                paisMasPoblado=paises;
                
                if (temperatura<20) {
                paisesMenos20++;  }
                    
                    if (habitantes>0) {
                        acumuladorHabitantes +=habitantes
                        contadorHabitantes++
                    var promedio= acumuladorHabitantes/contadorHabitantes;}

                         if (temperatura<maximaTemperatura ) {
                            maximaTemperatura=temperatura
                            paisMasTemperatura++;
                            
                        }
    }
    respuesta="cantidad de temperaturas impares "+temperaturasImpares+"<br>"
    respuesta="El pais con mas habitante = " +paisMasPoblado+"<br>"
    respuesta="Cantidad de paises con menos 20°c " +paisesMenos20+"<br>"
    respuesta="el promedio de habitantes es ="+promedio+"<br>"
    respuesta="La temperatura maxima es ="+maximaTemperatura+"del pais "+paisMasTemperatura+"<br>"

    document.write(respuesta)
   










} 



    //confim("mensaje")---->true/false