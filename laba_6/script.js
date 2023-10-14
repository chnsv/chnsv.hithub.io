/*document.addEventListener("DOMContentLoaded", function () {
  var stoimost = document.getElementById("stoimost");
  stoimost.addEventListener("click", calc);
});*/
  
window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementsByName("myselect");
  s[0].addEventListener("change", function(event) {
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
    if (select.value == "5000") {
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
    if (select.value == "10000") {
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
  
function calc() {
  var typet = document.getElementsByName("myselect").value;
  var name = document.getElementById("select1");
  var usluga = document.getElementById("checkboxes");
  var result = document.getElementById("result");
  var r;
  
  if(validate()) {
    if(typet === "5000") {
      r = calcsertif();
    }
    result.innerHTML = r;
  }

  else {
    window.alert("GG");
  }
}
function calcsertif(){
  var typet = document.getElementsByName("myselect").value;
  var count = document.getElementById("count");
  var dostavka = document.getElementById("myradios");

  var price = 0;
  price += parseInt(typet.options[typet.selectedIndex].value);
  price += (dostavka.checked == true) ? parseInt(dostavka.value) : 0;
  price = parseInt(count.value) * price;
  return price;
}
