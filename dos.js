function mostrar()
{
   var nombre;
   var genero ;
   var edad;
   var peso;
   var acumuladoresDeEdades=0
   var pesominimo=0;
   var personaMenosPesada;
   var contadorDistinto=0;
   var respuesta= "."
   var promedio=0;
   var contadorMayores25=0;

        for (var i = 0; i <4 ; i++) {
            nombre=prompt("ingrese nombre")
            
            genero=prompt("ingrese genero,masculino/femenino/otro")
            while (genero!="femenino" && genero!="masculino" && genero!="otro") {
                genero=prompt("error ingrese genero valido")}
                
                edad=parseInt(prompt("ingrese edad entre 18 y 100"))
                while (isNaN(edad) || edad<=18 || edad>100 ) {
                    edad=parseInt(prompt("error ingrese una edad valida"))}
                    
                    //entiendo que peso tiene que ser mayor a 1
                    peso=parseInt(prompt("ingrese peso"))
                    while (isNaN(peso) || peso<1) {
                        peso=parseInt(prompt("error ingresar peso valido"))}

            if (edad>=25) {
                acumuladoresDeEdades=acumuladoresDeEdades+edad;
                contadorMayores25++;}

                if (peso<pesominimo) {
                    pesominimo=peso
                    personaMenosPesada=nombre};
                    
                    if (genero!="masculino" || peso>80) {
                        contadorDistinto++;}

                       
                       
                        if (contadorMayores25>0) {
                            promedio=acumuladoresDeEdades/contadorMayores25
                        respuesta += " el promedio de edades mayores a 25 =" + promedio+"<br>"
                        } else {
                            respuesta += "no hay edades mayores a 25  "+"<br>"
                        }

                        respuesta +="Nombre de la persona menos pesada y su peso: "+personaMenosPesada+" "+pesominimo+"Kg"+"<br>"
                        respuesta +="cantidad de personas de género distinto a masculino ó peso mayor a 80: "+contadorDistinto+"<br>"

            
        } alert(respuesta)
    } 

/* 
        var nombre;
        var genero;
        var edad;
        var peso;
        var acumuladorEdades = 0;
        var cantidadEdadesMayorA25 = 0;
        var promedioEdad = 0;
        var respuesta = "";
        var personaMenosPesada;
        var pesoMinimo;
        var esPrimeraIteracion = true;
        var cantidadPersonas = 0;
    
        // 2) Inicializo variables y valido
        for (var i = 0; i < 4; i++) {
            nombre = prompt("Ingrese el nombre:");
    
            genero = prompt("Ingrese el género (femenino/masculino/otro").toLowerCase();
            while(genero != "femenino" && genero != "masculino" && genero != "otro") {
                genero = prompt("ERROR. El género debe femenino/masculino/otro. Reingrese:").toLowerCase();         
            }
    
            edad = prompt("Ingrese la edad (entre 18 y 100):");
            edad = parseInt(edad);        
            // Entiendo que se incluyen al 18 y al 100 en los valores permitidos.
            while(isNaN(edad) || edad < 18 || edad > 100) {
                edad = prompt("ERROR. La edad debe ser un nùmero entre 18 y 100. Reingrese:");
                edad = parseInt(edad);             
            }
    
            peso = prompt("Ingrese el peso (mayor a 1):");
            peso = parseInt(peso);        
            // Entiendo que no se incluye al 1 entre los vàlidos.
            while(isNaN(peso) || peso <= 1) {
                peso = prompt("ERROR. El peso debe ser un nùmero mayor a 1 (sin incluir). Reingrese:");
                peso = parseInt(peso);             
            }
            // Punto A
            if(edad >= 25) {
                acumuladorEdades += edad;
                cantidadEdadesMayorA25++;
            }
    
            // Punto B
            if (esPrimeraIteracion || peso < pesoMinimo) {
                pesoMinimo = peso;
                personaMenosPesada = nombre;
            }
    
            // Entiendo que 80 no esta incluido
            if (genero != "masculino" || peso > 80)
            {
                cantidadPersonas++;
            }
    
            esPrimeraIteracion = false;
        }
    
    
    
        // 3) Proceso los datos
        if(cantidadEdadesMayorA25 > 0) {
            promedioEdad = acumuladorEdades / cantidadEdadesMayorA25;
            respuesta += "El promedio de edades mayores a 25 es " + promedioEdad.toFixed(2) + ".<br>";
        }
        else
        {
            respuesta += "No se ingresaron edades mayores a 25.<br>";
        }
    
        respuesta += personaMenosPesada + " es la persona menos pesada y pesa " 
                    + pesoMinimo + "kg.<br>";
    
        respuesta += "La cantidad de personas de genero distinto de masculino o peso mayor a 80 es "
                    + cantidadPersonas + "<br>";
    
        // 4) Muestro los resultados
        document.write(respuesta);
 */





 
    
    

    
    
    
    
    