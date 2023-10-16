var curr;

window.addEventListener("DOMContentLoaded", function (event) {
    var s = document.getElementById("myselect");
    var ch = document.querySelectorAll(".checkboxes input[type=checkbox]");
    curr = 0;
    s.addEventListener("change", function (event) {
        var select = event.target;
        var vibor = document.getElementById("select1");
        var check = document.getElementById("checkboxes");
        var radios = document.getElementById("myradios");
        var count = document.getElementById("count");
        if (select.value === "0") {
            vibor.style.display = "none";
            check.style.display = "none";
            radios.style.display = "none";
            count.style.display = "none";
        }
        if (select.value === "1") {
            vibor.style.display = "none";
            check.style.display = "none";
            radios.style.display = "block";
            count.style.display = "block";
        }
        if (select.value === "2") {
            vibor.style.display = "block";
            check.style.display = "none";
            radios.style.display = "block";
            count.style.display = "block";
        }
        if (select.value === "3") {
            vibor.style.display = "none";
            check.style.display = "block";
            radios.style.display = "block";
            count.style.display = "block";
        }
        curr = parseInt(select.value);
    });
    ch.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            ch = event.target;
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
    var result = document.getElementById("result");
    var res;
    if (validate()) {
        if (curr === 1) {
            res = calcsertif();
            result.innerHTML = res;
        }
        if (curr === 2) {
            res = calcigr();
            result.innerHTML = res;
        }
        if (curr === 3) {
            res = calcflow();
            result.innerHTML = res;
        }
    } else {
        window.alert("GG");
    }
}

function calcsertif() {
    var count = document.getElementById("count");
    var dostavka = document.getElementsByName("myradio");
    var price = 0;
    var cena = 5000;
    var modf = 0;
    dostavka.forEach(function (e) {
        if (e.checked) {
            modf = e.value;
        }
    });
    price += (parseInt(cena) * parseInt(count.value) + parseInt(modf));

    return price;
}

function calcigr() {
    var count = document.getElementById("count");
    var dostavka = document.getElementsByName("myradio");
    var igrush = document.getElementById("select1");

    var price = 0;
    var modf;
    dostavka.forEach(function (e) {
        if (e.checked) {
            modf = e.value;
        }
    });

    price += parseInt(igrush.options[igrush.selectedIndex].value);
    price = parseInt(count.value) * price;
    price += parseInt(modf);

    return price;
}

function calcflow() {
    var count = document.getElementById("count");
    var dostavka = document.getElementsByName("myradio");
    var o1 = document.getElementsByName("props");
    var price = 0;
    var cena = 3000;
    var modf = 0;
    dostavka.forEach(function (e) {
        if (e.checked) {
            modf = parseInt(e.value);
        }
    });
    o1.forEach(function (e) {
        if (e.checked) {
            modf += parseInt(e.value);
        }
    });
    price += ((cena * parseInt(count.value)) + modf);
    return price;
}
