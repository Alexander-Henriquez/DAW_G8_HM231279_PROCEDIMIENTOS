var nombres = {
    "Personas": [
        {
            "imagen": "img/juan-robles.jpg",
            "nombre": "Juan",
            "apellido": "Robles",
            "edad": 29,
            "profesion": "Licenciado"
        },
        {
            "imagen": "img/lilian-rosales.jpg",
            "nombre": "Lilian",
            "apellido": "Rosales",
            "edad": 27,
            "profesion": "Bachiller"
        },
        {
            "imagen": "img/gustavo-gonzalez.jpg",
            "nombre": "Gustavo",
            "apellido": "Gonzalez",
            "edad": 28,
            "profesion": "Arquitecto"
        },
        {
            "imagen": "img/genesis-deras.jpg",
            "nombre": "Génesis",
            "apellido": "Deras",
            "edad": 31,
            "profesion": "Mercadóloga"
        },
        {
            "imagen": "img/reina-benitez.jpg",
            "nombre": "Reina",
            "apellido": "Benitez",
            "edad": 25,
            "profesion": "Secretaria"
        },
        {
            "imagen": "img/hugo-perez.jpg",
            "nombre": "Hugo",
            "apellido": "Pérez",
            "edad": 34,
            "profesion": "Diseñador"
        }
    ]
};


var div = document.getElementById("info");
div.innerHTML = volcarDatos(nombres.Personas);

function volcarDatos(datos) {
    var total = datos.length;
    var data = "<ul class=\"grid\">\n";

    for (var i = 0; i < total; i++) {
        data += "<li class=\"box\">\n";
        data += "    <div class=\"box-shadow\"></div>\n";
        data += "    <div class=\"box-gradient\">\n";
        data += "        <img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " + datos[i].nombre + " " + datos[i].apellido + "\" class=\"avatar\" />\n";
        data += "        <h4>\n";
        data += "            Nombre: " + datos[i].nombre + " " + datos[i].apellido + "\n";
        data += "        </h4>\n";
        data += "        <p>\n";
        data += "            Edad: " + datos[i].edad + "\n";
        data += "            <br />\n";
        data += "            Profesión: " + datos[i].profesion + "\n";
        data += "        </p>\n";
        data += "    </div>\n";
        data += "</li>\n";
    }

    data += "</ul>\n";
    return data;
}

   