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
  // Prevent form submission to check validation
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const organization = document.getElementById('organization').value.trim();
  const services = document.getElementById('services').value.trim();
  const message = document.getElementById('message').value.trim();

  // Regular Expressions
  const nameRegex = /^[a-zA-Z\s]{3,}$/;  // At least 3 characters, only letters and spaces
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email validation

  // Validate name
  if (!nameRegex.test(name)) {
      alert('Please enter a valid name (at least 3 characters and letters only).');
      return false;
  }

  // Validate email
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  // Validate message
  if (message === "") {
      alert('Please enter your message.');
      return false;
  }

  // Optionally validate organization and services if required (can be left blank)
  if (organization !== "" && !/^[a-zA-Z0-9\s]{3,}$/.test(organization)) {
      alert('Please enter a valid organization name (at least 3 characters, letters and numbers only).');
      return false;
  }

  if (services !== "" && !/^[a-zA-Z0-9\s,]{3,}$/.test(services)) {
      alert('Please enter a valid services description.');
      return false;
  }

  // If all validations pass, you can submit the form
  alert('Form submitted successfully!');
  this.submit(); // This will submit the form
});

