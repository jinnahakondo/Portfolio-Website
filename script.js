var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ------ sidemanu ------
var saidmanu = document.querySelector("ul");
function openmanu(){
    saidmanu.style.right="0";
}
function closemanu(){
    saidmanu.style.right="-200px"
}
// ----- form ------
const scriptURL = 'https://script.google.com/macros/s/AKfycbwM7IS8fSLtYecWkrtzA8_I_h7O9EEDCZPD02Wz5jhes44WODIIKvB2r27pNuzei3RYTQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Massage Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  //from action
  const msg= document.querySelector("#msg");