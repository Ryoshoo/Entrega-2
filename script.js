let ingreso = 500000;
const listado = [];
class lista {

    constructor(nombre, monto){
        this.nombre = nombre;
        this.monto = monto;
    }
}

function basico(gasto, nom){
    ingreso -= gasto;
    let nuevoGasto = new lista(nom, gasto);
    listado.push(nuevoGasto);
    alert("Tu saldo ahora es de: " + ingreso + " gastaste: " + gasto);
    nuevoMonto();
} 


function validar(){
    let gastoPrompt = parseInt(prompt("Cuanto es el monto del gasto?"));
    while (isNaN(gastoPrompt) || gastoPrompt <= 0){
        gastoPrompt = parseInt(prompt("Cuanto es el monto del gasto? Escribí un numero valido arriba de 0"));
    }
    let montoPrompt = prompt("En qué gastante?");
    while (montoPrompt == ""){
        montoPrompt = prompt("En qué hiciste el gasto? Escribí algo valido");
    }
    basico(gastoPrompt, montoPrompt);
   
}

function nuevoMonto(){

    let nuevogasto = parseInt(prompt("Poné otro gasto o escribí 0 si querés terminar."));
    while (isNaN(nuevogasto) || nuevogasto < 0){
        nuevogasto = parseInt(prompt("Cuanto es el monto del gasto? Escribí un numero valido arriba de 0"));
    }
    if(nuevogasto == 0){
        alert("Tu dinero disponible es: " + ingreso + ", gastaste: " + (500000 - ingreso) + " , acá te dejamos un listado de lo q gastaste:");
            for(let i = 0; i < listado.length; i++){
                let div = document.getElementById("cont1");
                let list = document.createElement("p");
                list.innerHTML = listado[i].nombre + ": ";
                list.innerHTML += listado[i].monto + " $";
                div.appendChild(list);
             };
    } else {
        let nuevoMonto = prompt("En qué gastante?");
        while (nuevoMonto == ""){
            nuevoMonto = prompt("En qué hiciste el gasto? Escribí algo valido");
        }
        basico(nuevogasto, nuevoMonto);
    }
}

validar();
console.log(listado);






