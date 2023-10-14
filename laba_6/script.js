/*document.addEventListener("DOMContentLoaded", function () {
  var r = document.getElementById("result");
  r.addEventListener("change", calc);
});*/

window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementsByName("myselect");
  s.addEventListener("change", function(event)
 {
    let select = event.target;
    let vibor = document.getElementById("select1");
    let check = document.getElementById("checkboxes");
    let radios = document.getElementById("myradios");
    let count = document.getElementById("count");
    
    console.log(select.value);
    
    if (select.value == "0") {
      vibor.style.display = "none";
      check.style.display = "none";
      radios.style.display = "none";
      count.style.display = "none";
    }
    if (select.value == "1") {
      vibor.style.display = "none";
      check.style.display = "none";
      radios.style.display = "block";
      count.style.display = "block";
    }
    if (select.value == "2") {
      vibor.style.display = "block";
      check.style.display = "none";
      radios.style.display = "block";
      count.style.display = "block";
    }
    if (select.value == "3") {
      vibor.style.display = "none";
      check.style.display = "block";
      radios.style.display = "block";
      count.style.display = "block";
    }
  });
  
  let ch = document.querySelectorAll(".checkboxes input[type=checkbox]");
  ch.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let ch = event.target;
      console.log(ch.value);
    });
  });
});
  
function validate() {
  var count = document.getElementById("count").value;
  var o = /^\d{1,}$/;
  var valid = o.test(count);

  if (valid) {
    window.output = "Правильный ввод";
  } else {
    window.output = "Некорректный ввод";
  }
  document.getElementById("message").innerHTML = window.output;
  return valid;
}

/*document.addEventListener("DOMContentLoaded", function(){
  document.getElementsById("result").onchange = function() {
    document.getElementsByName("myselect").value
  };
});*/


function calc() {
  var typet = document.getElementsByName("myselect").item(0).selectedIndex;
  var result = document.getElementById("result");
  var t = typet;
  var res;
  console.log(t);
  
  if(validate()) {
    if(t == "1") {
      res = calcsertif();
      result.innerHTML = res;
    }
    if(t == "2") {
      res = calcigr();
      result.innerHTML = res;
    }
    if(t == "3") {
      res = calcflow();
      result.innerHTML = res;
    }
  }
  else {
    window.alert("GG");
  }
}

function calcsertif(){
  var count = document.getElementById("count");
  var dostavka = document.getElementById("myradios");

  var price = 0;
  var cena = 5000;

  price += cena * parseInt(count.value);
  price += (dostavka.checked == true) ? parseInt(dostavka.value) : 0;
  console.log(price);
  console.log('Hello, World!');
  return price;
}

function calcigr(){
  var count = document.getElementById("count");
  var dostavka = document.getElementById("myradios");
  var igrush = document.getElementById("select1");

  var price = 0;

  price += parseInt(igrush.options[igrush.selectedIndex].value);
  price += parseInt(count.value) * price;
  price += (dostavka.checked == true) ? parseInt(dostavka.value) : 0;
  console.log(price);
  console.log('Hello, World!');
  return price;
}

function calcflow(){
  var count = document.getElementById("count");
  var dostavka = document.getElementById("myradios");
  var obertka = document.getElementByName("prop1");
  var otkritka = document.getElementByName("prop2");

  var price = 0;
  var cena = 3000;

  if(obertka.checked){
    price += cena * parseInt(count.value);
    price += (dostavka.checked == true) ? parseInt(dostavka.value) : 0;

  }
  console.log(price);
  console.log('Hello, World!');
  return price;
}
