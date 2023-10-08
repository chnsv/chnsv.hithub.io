document.addEventListener("DOMContentLoaded", function() {
    var stoimost = document.getElementById("stoimost");
    stoimost.addEventListener("click", calc);
  });

  function validate() {
    var count = document.getElementById("count").value;
    var o = /^[\d]$/;
    var valid = o.test(count);

    if(valid) output = "Правильный ввод";
    else output = "Некорректный ввод";
    document.getElementById("message").innerHTML = output;
    return valid;
  }

  function calc() {
    var name = document.getElementById("select1");
    var count = document.getElementById("count");
    var result = document.getElementById("result");

    if(validate()){
        var price = 0;
        price += parseInt(name.options[name.selectedIndex].value);
        price = parseInt(count.value) * price;
        result.innerHTML = price;
    }
    else alert("GG");
  }
