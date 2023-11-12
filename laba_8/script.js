const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");
button.addEventListener("click",()=>{
    form.classList.add("open");
    popup.classList.add("popup_open");
});


//чтоб форма самостоятельно не отправлялась
function handleFormSubmit(event) {
  event.preventDefault()
  console.log('Отправка!')
}
const applicantForm = document.getElementById('myForm')
applicantForm.addEventListener('button', handleFormSubmit)



$(window).on("popstate", ()=> {
  Down();
});

history.back();
