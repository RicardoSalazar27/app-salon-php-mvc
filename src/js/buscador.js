document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp(){
    buscarPorFecha();
};

function buscarPorFecha(){

    const fechaInput = document.querySelector('#fecha');//se selecciona la fecha
    fechaInput.addEventListener('input', function(e){ //se va a escuchar por medio de input la fecha
        const  fechaSeleccionada = e.target.value; //por medio de "e"-evento, obtenemos el valor
        
        //se manda la fecha por $_GET en un queryString
        window.location = `?fecha=${fechaSeleccionada}`; 
    });
}