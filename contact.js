document.addEventListener("DOMContentLoaded", () => {
  const moveableElements = document.querySelectorAll(".moveable-element");

  moveableElements.forEach(element => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const moveX = (x / rect.width) * 10 - 5;
      const moveY = (y / rect.height) * 10 - 5;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate(0, 0)";
    });
  });
});


var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");

bars.addEventListener("click", barClicked, false);

function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');

}


let mymenu =document.querySelector(".bars");

window.onscroll = function() {

  if(window.scrollY>=100){
    mymenu.style.display ="block";
  }else{
    mymenu.style.display="none"
  }}

// when i final i well stat this

window.onload = function() {

  // let myDivload = document.createElement("div");
  // myDivload.id = "about-popup";
  // myDivload.innerHTML = `<div>Contact</div>`;

  // document.body.appendChild(myDivload);

  // setTimeout(() => {
  //     myDivload.remove();
  // }, 700);

    let messages = ["Contact"];
    let messageIndex = 0;
    
    let myDivload = document.createElement("div");
    myDivload.className = "temporary-message";
    document.body.appendChild(myDivload);

    function showNextMessage() {
        if (messageIndex < messages.length) {
            myDivload.innerHTML = `<div class="message-container"><div class="circle"></div><div>${messages[messageIndex]}</div></div>`;
            myDivload.classList.remove('hidden');
            setTimeout(function() {
                myDivload.classList.add('hidden');
                messageIndex++;
                setTimeout(showNextMessage, 500);
            }, 500);
        } else {
            myDivload.remove();
        }
    }

    showNextMessage();


  const currentTimeElement = document.getElementById('current-time');
  const now = new Date();
  
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
 
  const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;

  const timeString = `${hours}:${minutesFormatted} ${ampm}`;
  
  currentTimeElement.textContent = timeString;

};

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const organization = document.getElementById('organization').value;
  const services = document.getElementById('services').value;
  const message = document.getElementById('message').value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Organization:', organization);
  console.log('Services:', services);
  console.log('Message:', message);

});
