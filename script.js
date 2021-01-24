var words = ["appel", "aldus", "afwas", "aftel", "aarde", "armen", "actie", "apart", "adres", "avond", "aders", "alarm", "boten", "balen", "beter", "bomen", "boren", "boven", "boxen", "brood", "broek", "brand", "breed", "benen", "beeld", "brief", "beten", "basis", "blauw", "beren", "buren", "banen", "bloed", "broer", "blond", "boter", "beleg", "breng", "baken", "beker", "blind", "bezig", "baden", "bedel", "bazen", "bazin", "baren", "beden", "beken", "bezem", "baard", "bidet", "breuk", "conus", "cello", "creme", "cloud", "cacao", "cadet", "cavia", "ceder", "combi", "china", "clown", "draai", "deden", "dalen", "derde", "delen", "dwaas", "daden", "dader", "dames", "diner", "datum", "dozen", "dreun", "duits", "dagen", "deren", "dwerg", "dwaal", "dwing", "druil", "droog", "draad", "dweil", "drank", "duren", "dwars", "drugs", "daten", "daler", "doorn", "disco", "degen", "droom", "dient", "drone", "dadel", "duwen", "druif", "deken", "deler", "elven", "eigen", "enger", "engel", "elder", "enkel", "effen", "email", "egaal", "fiets", "files", "forel", "films", "feest", "fruit", "falen", "flora", "fauna", "feeen", "freak", "forum", "fusie", "geven", "gaven", "groen", "graai", "getal", "grens", "grond", "groef", "graal", "gewei", "games", "grote", "groet", "garen", "gebak", "graag", "genre", "glans", "geluk", "geeuw", "horen", "heren", "halen", "hagel", "haren", "helen", "harde", "hemel", "hoofd", "huren", "hamer", "haken", "heden", "hotel", "hobby", "heler", "hoger", "ieder", "index", "immer", "icoon", "inlog", "inzet", "innig", "jovel", "jaren", "jicht", "jabot", "jacht", "jaden", "jagen", "jager", "japon", "jarig", "jawel", "jeans", "jemig", "jeugd", "joint", "jonas", "joule", "koken", "kreet", "koker", "kerst", "kegel", "koude", "kader", "krent", "kamer", "kaars", "kaart", "kraan", "krant", "keren", "kruid", "kerel", "kubus", "kraal", "kleur", "kroon", "klein", "korst", "klopt", "kabel", "kunst", "kopje", "krans", "klimt", "kater", "klink", "kudde", "kruis", "lopen", "laten", "lepel", "links", "laden", "leven", "lezen", "lucht", "lenen", "laser", "lente", "licht", "lader", "leder", "lunch", "lijst", "leger", "leden", "legen", "lagen", "lezer", "lever", "lingo", "loper", "luier", "lager", "leeuw", "maand", "malen", "maken", "media", "meter", "motor", "maten", "markt", "mazen", "molen", "meest", "meren", "model", "meden", "maden", "macht", "meeuw", "mager", "magen", "maren", "manen", "noord", "nieuw", "negen", "namen", "neven", "nodig", "naden", "neder", "nemen", "onder", "optel", "ovaal", "ovale", "onwel", "optie", "orden", "oppas", "ouder", "ophef", "oases", "palen", "plein", "pegel", "paars", "patat", "prijs", "piano", "pixel", "paden", "pasta", "pizza", "poten", "paard", "puber", "pauze", "preek", "polis", "pater", "proef", "panda", "penis", "prins", "pluto", "polen", "plint", "quota", "quant", "quark", "queue", "quilt", "quote", "robot", "reken", "raden", "regen", "radio", "rente", "regio", "rugby", "reden", "roken", "ruzie", "ruist", "regel", "racen", "races", "riool", "ramen", "radar", "roman", "rokje", "razen", "roede", "staan", "staal", "speel", "steeg", "stoel", "stook", "steek", "schep", "spijs", "stoep", "shirt", "samen", "sites", "sport", "spalk", "sjaal", "storm", "staat", "steun", "strak", "serie", "shows", "schat", "snoep", "sfeer", "smeer", "speer", "scene", "speld", "smeed", "smaak", "super", "stand", "steer", "smelt", "sedan", "skier", "sluis", "sneer", "steel", "truck", "terug", "typen", "talen", "taboe", "tegel", "taart", "tafel", "trouw", "teken", "teren", "taken", "treur", "tenen", "titel", "thuis", "tiara", "teder", "toets", "tabak", "trein", "tarwe", "telen", "teler", "uiten", "uilig", "uitje", "uiver", "ultra", "uniek", "uppie", "uraan", "uiers", "velen", "vloer", "video", "varen", "vegen", "veren", "vader", "vaten", "vuren", "vrouw", "vlees", "vogel", "vroeg", "vezel", "veins", "vorst", "veder", "vanaf", "vieze", "veger", "villa", "veler", "vrede", "vries", "woord", "wagen", "wonen", "waren", "warme", "weten", "water", "weren", "wazig", "wegen", "weven", "wezen", "weken", "wraak", "wilde", "wreed", "wrede", "wenst", "woest", "xenon", "yacht", "yucca", "zwaar", "zware", "zesde", "zagen", "zalig", "zomer", "zeden", "zwart", "zeven", "zicht", "zadel", "zweet", "zenuw", "zweer", "zweef", "zaden", "zaken", "zeker", "zever", "zeeen"];
var input = getID("input");
var check = getID("inputCheck");
var buttonCheck = getID("buttonCheck").addEventListener("click", Check);
var lingowoord = null;
var letterinput = null;
var rij = 5;
var kolom = 5;
var rijChecker = 1;
start();



function start() {
    var container = 0;
    blokjes(getID("wit"), kolom, rij);
}

input = words[Math.floor(Math.random() * words.length)]

console.log(input);

check.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        Check();

    }
});



    lingowoord = input.split("");
    for (var i = 1; i <= 5; i++) {
        var blokId3 = "r" + i + "k1";
        getID(blokId3).innerHTML = lingowoord[0];
    }


function Check() {

    lingowoord = input.split("")
    letterinput = getID("inputCheck").value.split("")

    if(letterinput.length == 5){

        

    for (var i = 0; i < 5; i++) {
            var blokId = "r" + rijChecker + "k" + (i + 1);

            getID(blokId).innerHTML = letterinput[i];
            getID(blokId).style.borderRadius = "0";
            getID(blokId).style.backgroundColor = "white"

            if (lingowoord[i] == letterinput[i]) {
                getID(blokId).style.backgroundColor = "green"
            }
        }
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                var blokId2 = "r" + rijChecker + "k" + (i + 1);
                if (i != j && letterinput[j] == lingowoord[i]) {
                    if (getID(blokId2).style.backgroundColor != "green") {
                        getID(blokId2).style.backgroundColor = "yellow"
                        getID(blokId2).style.borderRadius = "50px";

                    }
                }
            }
        }
        rijChecker++;
    }else{
        alert("het moeten 5 letters zijn sukkel ;)");
    }

}


function blokjes(parentElement, kolom, rij) {
    for (var k = 1; k <= kolom; k++) {

        for (var p = 1; p <= rij; p++) {
            var blokjes = document.createElement("div")
            var white = getID("white");
            white.appendChild(blokjes)
            blokjes.setAttribute("class", "vierkant")
            blokjes.setAttribute("id", "r" + k + "k" + p)
            blokjes.innerHTML  = "&nbsp;" ;


        }
    }
}

function getID(id){
    return document.getElementById(id);
}
