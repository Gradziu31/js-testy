var sum = document.getElementById("koszt");

function Config(name, price) {
    this.name = name;
    this.price = price;
}

var addition = [];

//addition.push(new Config("Pakiet sportowy S line (koszt 150 zł)", 150));
//addition.push(new Config("Nagłośnienie (koszt 100 zł)", 100));
//addition.push(new Config("Wydech (koszt 201 zł)", 201)); 
//addition.push(new Config("Szyberdach (koszt 220 zł)", 220));
//addition.push(new Config("Domykanie drzwi (koszt 400 zł)", 400));
//addition.push(new Config("ABS (koszt 200 zł)", 200));
addition.push(new Config("Ładowarka bezprzewodowa (koszt 800 zł)", 800)); 
addition.push(new Config("Głośnik bluetooth (koszt 250 zł)", 250));
addition.push(new Config("Etui skórzane (koszt 99 zł)", 99));
addition.push(new Config("Słuchawki bezprzewodowe (koszt 799 zł)", 799)); 
addition.push(new Config("Szkło ochronne na ekran (koszt 39 zł)", 39));
addition.push(new Config("Dodatkowe ubezpieczenie o rok (koszt 599 zł)", 599));

for (i = 0; i < addition.length; i++) {
    var lista = document.getElementById("lista");
    var p = addition[i].name;
    var price = addition[i].price;
    var label = document.createElement("label");
    var input = document.createElement("input");
    var par = document.createElement("p");
    label.appendChild(input)
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", i);
    label.appendChild(par);
    lista.appendChild(label);
    lista.getElementsByTagName("p")[i].innerHTML = p;
}

var checkboxes = lista.getElementsByTagName("input");

function konsola() {
    selected = [];
    for (var x = 0; x < checkboxes.length; x++) {
        if (checkboxes[x].checked == true) {
            var add = checkboxes[x].attributes["id"];
            selected.push(checkboxes[x].attributes["id"]);
            console.log(add);
        } else {
            var subtract = checkboxes[x].attributes["id"];
            selected.splice(subtract);
            console.log(subtract);
        }

    }
}

for (var x = 0; x < checkboxes.length; x++) {
    lista.getElementsByTagName("input")[x].addEventListener("click", calculate);
}
suma = 0;
alles = 0;


function calculate() {
    alles = 0;
    alles += suma;
    sum.innerHTML = alles;
    for (var x = 0; x < checkboxes.length; x++) {
        var prices = addition[x].price;

        if (checkboxes[x].checked) {
            console.log("zaznaczono, " + x + " z ceną " + prices);

            alles += prices;
            sum.innerHTML = alles;
            console.log(suma + alles);
        }
    }
}

document.getElementById("plus").addEventListener("click", dodawaj);
document.getElementById("minus").addEventListener("click", odejmuj);

zatrzymaj = 0;

function dodawaj() {
    if (zatrzymaj < 2) {
        zatrzymaj += 1;
        suma += 2500;
        alles += 2500;
        sum.innerText = +suma;
        sum.innerHTML = alles;
        console.log("dodaję +1 do zatrzymaj = " + zatrzymaj);
        calculate();
    } else if (zatrzymaj == 2) {
        zatrzymaj = 2;
        console.log("else jest 3 zostawiam zatrzymaj na 2 = " + zatrzymaj);
        calculate();
    }
}

function odejmuj() {
    if (zatrzymaj <= 0) {
        zatrzymaj = 0;
        alles -= 2500;
        sum.innerHTML = alles;
        calculate();
        console.log("jest 0 więc zatrzymaj na 0 = " + zatrzymaj);
    } else {
        suma -= 2500;
        alles -= 2500;
        sum.innerText = +suma;
        sum.innerHTML = alles;
        zatrzymaj -= 1;
        calculate();
        console.log("odejmuję -1 od odejmowania = " + zatrzymaj);
    }

}
