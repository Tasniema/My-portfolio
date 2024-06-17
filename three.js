document.addEventListener("DOMContentLoaded", () => {
  const moveableElements = document.querySelectorAll(".moveable-element");

  moveableElements.forEach(element => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left; // x position within the element
      const y = event.clientY - rect.top;  // y position within the element

      const moveX = (x / rect.width) * 10 - 5; // Scale down the movement
      const moveY = (y / rect.height) * 10 - 5;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate(0, 0)"; // Reset position on mouse leave
    });
  });
});


var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");

//setting up the listener
bars.addEventListener("click", barClicked, false);

//setting up the clicked Effect
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

    let messages = ["About"];
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
