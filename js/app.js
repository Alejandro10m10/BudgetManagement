// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

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
    insertarPresupuesto(cantidad){
        // Extrayendo los valores
        const {presupuesto, restante} = cantidad;

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
}

// Instanciar clases
let presupuesto;
const ui = new UI();

// Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}