//Consumir API externas
//    https://mindicador.cl/

//Este archivo debe ir en la carpeta "assets/js"

//<!--Agregar esta línea en la pagina donde se insertará el conversor para visualizar api-->
//    <script src="assets/js/javascript_api.js" ></script>


//Consumo API mindicador.cl
$(document).ready(function(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open ('GET','https://mindicador.cl/api', true)
    xmlHttp.send();

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            //document.getElementById("valorUF").innerHTML = data.uf.nombre + ": " + new Intl.NumberFormat('es-Cl',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(data.uf.valor)
            //document.getElementById("valorDolarHoy").innerHTML = data.dolar.nombre + ": " + new Intl.NumberFormat('es-Cl',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(data.dolar.valor)
            //document.getElementById("valorEuroHoy").innerHTML = data.euro.nombre + ": " + new Intl.NumberFormat('es-Cl',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(data.euro.valor)
            document.getElementById("valorDolar").innerHTML = data.dolar.valor
            document.getElementById("valorEuro").innerHTML = data.euro.valor
        }   
    };
});

//Convertir monedas
function convertir() 
{
    var valor=parseFloat(document.getElementById("cantidad").value);
    //
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
    var dolar=document.getElementById("valorDolar").innerHTML;
    var euro=document.getElementById("valorEuro").innerHTML;
    resultado=0;
    //peso a dolar
    if(de==1&&a==2)
    {
        resultado=valor/dolar;
    }
    //peso a euro
    else if(de==1&&a==3)
    {
        resultado=valor/euro;
    }
    //dolar a peso
    else if(de==2&&a==1)
    {
        resultado=valor*dolar;
    }
    //dolar a euro
    else if(de==2&&a==3)
    {
        resultado=valor*(dolar/euro);
    }
    //euro a peso
    else if(de==3&&a==1)
    {
        resultado=valor*euro;
    }
    //euro a dolar
    else if(de==3&&a==2)
    {
        resultado=valor*(euro/dolar);
    }
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML=resultado.toFixed(2);

}
//mostrar fecha
function mostrarFechaConversor(){

    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f=new Date();
    document.getElementById("fechaEscrita").innerHTML = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
    //document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
    
    
    //var fecha = new Date(); 
    //document.getElementById("fecha").innerHTML = fecha;
    //var tiempo = setTimeout(function() {mostrarFecha()},1000)

    //const hoy = fecha.getDate();
    //const mesActual = fecha.getMonth() + 1;   
    //document.getElementById("hoy").innerHTML = hoy + " / " + mesActual;
}


    
    
