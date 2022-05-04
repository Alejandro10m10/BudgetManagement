// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Instanciar clases
let presupuesto;
const ui = new UI();

init();

function init(){
    evenListeners();
}

// Eventos

function evenListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}



// Classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = this.presupuesto;
        this.gastos = [];
    }
}

class UI{

}

// Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto)
}