document.addEventListener("DOMContentLoaded", function () {
    var stoimost = document.getElementById("stoimost");
    stoimost.addEventListener("click", calc);
});

function validate() {
    var count = document.getElementById("count").value;
    var o = /^[\d]$/;
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
    var name = document.getElementById("select1");
    var count = document.getElementById("count");
    var result = document.getElementById("result");
    var price = 0;

    if (validate()) {
        price += parseInt(name.options[name.selectedIndex].value);
        price = parseInt(count.value) * price;
        result.innerHTML = price;
    } else {
        window.alert("GG");
    }
}
