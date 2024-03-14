function buildMenu()
{
    var links = [
       ["STARTSIDA", "index.html"],
       ["OM OSS", "omoss.html"],
       ["DESIGNERS", "designers.html"],
       ["WEBBSHOP", "webbshop.html"],
       ["BÄSTSÄLJARE", "detaljsida.html"],
       ["KONTAKT", "kontakt.html"],
    ]
    
    var content = ""
    for(var i = 0; i < links.length; i++)
    {
        var text = links[i][0]
        var adress = links[i][1]
        content = content + "<li><a href=\"" + adress + "\">" + text + "</a></li>"
        // <li><a href="index.html">Startsidan</a></li>
    }

    document.getElementById("menu").innerHTML = content

}