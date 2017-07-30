var cena = 0;
var stan_klikniec = 0

function dodaj(){
  if ( stan_klikniec < 2) {
    cena=cena+2500;
    stan_klikniec++;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  }
}

function odejmi(){
  if ( stan_klikniec > 0) {
    cena=cena-2500;
    stan_klikniec--;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  }
}


// var box_1 = document.getElementById("box_1");
// var box_2 = document.getElementById("box_2").id;
// var box_3 = document.getElementById("box_3");
//
// var tablica1 = ["box_0", "box_1", "box_2", "box_3", "box_4", "box_5",];
// var cc = 0;
//
//
// while(cc < tablica1.length){
//   var list1 = document.getElementById("list1");
//   var lista = document.createElement("li");
//   list1.appendChild(lista);
//   var className = tablica1[cc];
//   var text = document.createTextNode(className);
//   lista.appendChild(text);
//   cc++;
// }



function zaznaczonyczynie(){
  var box_1 = document.getElementById("box_1").checked;
  if ( box_1 == true) {
    cena=cena+200;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  } else if  ( box_1 == false) {
    cena=cena-200;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  }
}

function zaznaczonyczynie2(){
  var box_2 = document.getElementById("box_2").checked;
  if ( box_2 == true) {
    cena=cena+300;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  } else if  ( box_2 == false) {
    cena=cena-300;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  }
}

function zaznaczonyczynie3(){
  var box_3 = document.getElementById("box_3").checked;
  if ( box_3 == true) {
    cena=cena+1600;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  } else if  ( box_3 == false) {
    cena=cena-1600;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  }
}

function zaznaczonyczynie4(){
  var box_4 = document.getElementById("box_4").checked;
  if ( box_4 == true) {
    cena=cena+300;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  } else if  ( box_4 == false) {
    cena=cena-300;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  }
}

function zaznaczonyczynie5(){
  var box_5 = document.getElementById("box_5").checked;
  if ( box_5 == true) {
    cena=cena+200;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  } else if  ( box_5 == false) {
    cena=cena-200;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  }
}

function zaznaczonyczynie6(){
  var box_6 = document.getElementById("box_6").checked;
  if ( box_6 == true) {
    cena=cena+300;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  } else if  ( box_6 == false) {
    cena=cena-300;
    return stan.innerHTML ="<h1>Aktualna cena:" + (cena) + "zł </h2>";
  }
}



var licznikUK = 0;
function dostawaUK(){
  var dostawaUKK = document.getElementById("dostawaUKK");
  if(licznikUK == 0){
    dostawaUKK.style.border = "thick solid #0000FF";
    dostawaUSAA.style.border = "0";
    licznikUK++;
  } else{
    dostawaUKK.style.border = "0";
    dostawaUSAA.style.border = "thick solid #0000FF";
    licznikUK--;
  }
}


var licznikUSA = 0;
function dostawaUSA(){

  var dostawaUSAA = document.getElementById("dostawaUSAA");
  if(licznikUSA == 0){
    dostawaUSAA.style.border = "thick solid #0000FF";
    dostawaUKK.style.border = "0";
    licznikUSA++;
  } else{
    dostawaUSAA.style.border = "0";
    dostawaUKK.style.border = "thick solid #0000FF";
    licznikUSA--;
  }
}
