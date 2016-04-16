
nom_div("escenario")
{
    vistaJuego();  
    aleatoria();
}

function vistaJuego()
{
    
        txt = "<table>",
        nomID   = "";
        eventos = [];
        for(var fila = 0; fila < 4; fila ++)
        {
            txt += "<tr>";
            for(var col = 0; col < 4; col ++)
            {
                nomID = fila + "_" + col;
                txt += "<td id = 'td_"+(nomID)+"'>";
                txt += "</td>";
            }
            txt += "</tr>";
        }
        txt += "</table>";
        nom_div("escenario").innerHTML = txt;
}

function aleatoria()
{
    fila = Math.floor(Math.random() * 4);
    columna = Math.floor(Math.random() * 4);

    nom_div("td_"+fila+"_"+columna).style.backgroundColor = "red";
}

function nom_div(div)
{
    return document.getElementById(div);
}
