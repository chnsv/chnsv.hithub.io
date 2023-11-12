const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");
button.addEventListener("click",()=>{
    form.classList.add("open");
    popup.classList.add("popup_open");
});

let Obj = {
  form: "EnterForm",
};
history.pushState(Obj, "page 2", "form.html");
