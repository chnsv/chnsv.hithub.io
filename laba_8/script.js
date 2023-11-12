const button = document.querySelector("button");
const form = document.querySelector("#myForm");
const popup = document.querySelector(".popup");
button.addEventListener("click",()=>{
    form.classList.add("open");
    popup.classList.add("popup_open");
    history.pushState(null, null, 'page1.html');
    history.forward();
});

$(window).on('popstate', function() {
  $('.modal').click();     
});

$(window).on("popstate",()=>{
  history.back();
})
$(window).on('popstate', function(){
  closePopup();
});

//чтоб форма самостоятельно не отправлялась
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Отправка!');
}
const applicantForm = document.getElementById('myForm');
applicantForm.addEventListener('submit', handleFormSubmit);
