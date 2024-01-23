function calculatePrice() {
  var quantity = parseInt(document.getElementById("quantity").value);
  var serviceType = document.querySelector('input[name="serviceType"]:checked').value;
  var option = document.getElementById("option").value;
  var property = document.getElementById("property").checked;
  var price = 0;
  if (serviceType === "type1") {
    price = 2000 * quantity;
  } else if (serviceType === "type2") {
    price = 1500 * quantity;
    price += option === "option0" ? 0 : 0;
    price += option === "option1" ? 30 : 0;
    price += option === "option2" ? 100 : 0;
    price += option === "option3" ? 500 : 0;
  } else if (serviceType === "type3") {
    price = 20 * quantity;
    price += property ? 100 : 0;
  }
  else if (serviceType === "type4") {
    price = 1520 * quantity;
    price += property ? 100 : 0;
    price += option === "option1" ? 30 : 0;
    price += option === "option2" ? 100 : 0;
    price += option === "option3" ? 500 : 0;
  } else if (serviceType === "type5") {
    price = 3520 * quantity+quantity*25;
    price += option === "option1" ? 30 : 0;
    price += option === "option2" ? 100 : 0;
    price += option === "option3" ? 500 : 0;
    price += property ? 100 : 0;
  }
  document.getElementById("price").innerHTML = "Цена: " + price + " руб.";
}
