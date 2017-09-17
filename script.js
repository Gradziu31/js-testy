var sum = document.getElementById("koszt");

function Config(name, price) {
    this.name = name;
    this.price = price;
}

var addition = [];
 
addition.push(new Config("Pakiet sportowy S line (koszt 150 zł)", 150));
addition.push(new Config("Nagłośnienie (koszt 100 zł)", 100));
addition.push(new Config("Wydech (koszt 201 zł)", 201));
addition.push(new Config("Szyberdach (koszt 220 zł)", 220));
addition.push(new Config("Domykanie drzwi (koszt 400 zł)", 400));
addition.push(new Config("ABS (koszt 200 zł)", 200));

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


function dodawaj(){
    suma += 2500;
    alles += 2500;
    sum.innerText = +suma;
    calculate();
    sum.innerHTML = alles;
} 

function odejmuj(){
    suma -= 2500;
    alles -= 2500;
    sum.innerText = +suma;
    calculate();
    sum.innerHTML = alles;
}

