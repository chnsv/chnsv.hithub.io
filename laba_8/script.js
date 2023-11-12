const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");
button.addEventListener("click",()=>{
    form.classList.add("open");
    popup.classList.add("popup_open");
    history.pushState(null, null, 'page1.html');
    history.forward();
});


history.replaceState({opened:false},"",window.location.href);
$(window).on("popstate",()=>{
  Down();
})
//чтоб форма самостоятельно не отправлялась
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Отправка!');
}
const applicantForm = document.getElementById('myForm');
applicantForm.addEventListener('submit', handleFormSubmit);
