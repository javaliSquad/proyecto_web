/*function mostrarHora(){
    console.log("proando")
    var fecha = new Date();
    var tiempo = setTimeout(function (){mostrarHora()})
    document.getElementById("mostrarHora").innerHTML = fecha;
}*/

//INICIO FECHA Y HORA//
function mostrarHora() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("mostrarHora").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        mostrarHora()
    }, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;

}

function mostrarFecha() {
    const fecha = new Date();
    const dateFormated = new Intl.DateTimeFormat('es-CL').format(fecha)
    document.getElementById("mostrarFecha").innerHTML = dateFormated;
}

const showData = () => {
    console.log(this.responseText);
}


const fetchUsers = () => {
    console.log("ejecuting")
    const card = $('#profile-card');
    const xmlHttp = new XMLHttpRequest();
    //xmlHttp.addEventListener('load', showData);
    xmlHttp.open('GET', "https://randomuser.me/api/?results=50", true)
    xmlHttp.send();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            const response = JSON.parse(xmlHttp.responseText);
            response.results.forEach(currentUser => {
                console.log(currentUser)
                card.append(`<div class="card m-4" style="width: 18rem;"> 
                                <img src="${currentUser.picture.large}" class="card-img-top" alt="..."> 
                                <div class="card-body">
                                <h5 class="card-title">${currentUser.name.first} ${currentUser.name.last}</h5>
                                <p>Email: ${currentUser.email}</p>
                                <p>Teléfono: ${currentUser.phone}</p>
                                </div>
                                </div>`);
            })
        }
    }
}
//backtick


//VALIDACIONES//
//FIN FECHA Y HORA//



//FIN VALIDACIONES//

//INICIO CONVERTIDOR DE MONEDAS//
//FIN CONVERTIDOR//

// INICIO TEMA OSCURO//


$(document).ready(function ($) {

    //con este codigo estoy escuchando el evento 'change' del input con id 'darkMode'
    $("#darkMode").change(function () {


        /*
        Estos son los nombres de las clases css
         */
        const bodyDark = "dark-mode";
        const headerDark = "mynav-dark"
        const headerLight = "mynav"
        const bienvenidaDark = "bienvenida-dark";
        const bienvenidaLight = "bienvenida";
        const footerDark = "my-footer-dark";
        const footerLight = "my-footer";
        const lotoLight = "icon-loto";
        const lotoDark = "icon-loto-dark";


        const body = $('#my_body'); // aqui selecciono un elemento por id y le agrego o quite una class css con jquery
        if (body.hasClass(bodyDark)) {
            body.removeClass(bodyDark);
        } else
            body.addClass(bodyDark)


        const header = $("#my-header");
        if (header.hasClass(headerLight)) {
            header.removeClass(headerLight);
            header.addClass(headerDark)
        } else {
            header.removeClass(headerLight);
            header.addClass(headerLight)
        }

        const bienvenida = $("#bienvenida");
        if (bienvenida.hasClass(bienvenidaDark)) {
            bienvenida.removeClass(bienvenidaDark);
            bienvenida.addClass(bienvenidaLight)
        } else {
            bienvenida.removeClass(bienvenidaLight);
            bienvenida.addClass(bienvenidaDark)
        }

        const footer = $("#my-footer");
        if (footer.hasClass(footerDark)) {
            footer.removeClass(footerDark);
            footer.addClass(footerLight)
        } else {
            footer.removeClass(footerLight);
            footer.addClass(footerDark)
        }

        const iconoloto = $("#icon-loto");
        if (iconoloto.hasClass(lotoDark)) {
            iconoloto.removeClass(lotoDark);
            iconoloto.addClass(lotoLight)
        } else {
            iconoloto.removeClass(lotoLight);
            iconoloto.addClass(lotoDark)
        }

    });

    $("#form-sofi").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            rut: {
                required: true,
                minlength:3,
                maxlenght:9
            },
            email: {
                required: true,
                email: true
            },
            fono: {
                required: true,
                fono: true
            },
            password: {
                required: true,
                minlength: 5
             },
             confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
             },
             comentarios:{
                 required:true,
                 maxlenght: 20
             },
        },
        messages: {
            nombre: {
                required: "Por favor ingresa tu nombre",
                minlength: "Nombre debe contener almenos 3 caracteres"
            },
            apellido: {
                required: "Por favor ingresa tu apellido",
                minlength: "Nombre debe contener almenos 3 caracteres"
            },
            rut: {
                required: "Por favor ingresa tu rut",
                maxlenght: "No puede exceder de 9 "
            },
            email: {
                required: "Por favor ingresa tu correo",
                email: "Intenta con un formato válido ej: abc@correo.com"
            },
            fono: {
                required: "este campo es requerido",
                fono: "formato de telefono es 912345678",
                minlength: "Debe tener al menos 9 numeros",
                maxlenght: "No puede tener mas de 9 numeros"
            },
            password: {
                required: "Ingresa un password",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
                equalTo: "Por favor ingresa una contraseña"
             },
            confirm_password: {
                required: "Ingresa un password",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
                equalTo: "Las contraseñas no coinciden"
             },
             comentarios:{
                 required: "Este campo es obligatorio",
                 maxlenght: "no puede superar los 20 caracteres"
             },
        }
    });

});

$(function(){
    $("#comentarios").keyup(function(event) {
        $("#countno").text($(this).val().length);
        var x = $(this).val().length;
        if (x>20) 
        {
            $(this).css("border",'1px solid red');
            $(".error-msg").show();
        }
        else
        {
            $(".error-msg").hide();
            $(this).css("border",'');
        }
    });
})





//FIN TEMA OSCURO//

//INICIO PERFILES API//
//FIN//
