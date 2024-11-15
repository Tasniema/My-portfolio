document.addEventListener("DOMContentLoaded", () => {
  const moveableElements = document.querySelectorAll(".moveable-element");

  moveableElements.forEach(element => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const moveX = (x / rect.width) * 10 - 9;
      const moveY = (y / rect.height) * 10 - 9;

      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate(0, 0)";
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


window.onload = function() {
  let messages = ["Hello", "Bonjour" ,"환영"];
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
}



let mymenu =document.querySelector(".bars");
window.onscroll = function() {


    if(window.scrollY>=100 ){
      mymenu.style.display ="block";
    }else if(window.innerWidth > 540){
      mymenu.style.display ="block";
    }
    else{
      mymenu.style.display="none"
    }
}




document.addEventListener('DOMContentLoaded', () => {
  const myWorks = document.querySelectorAll('.my-work');
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popup-image');

  myWorks.forEach(work => {
    work.addEventListener('mouseenter', (e) => {
      const imageUrl = work.getAttribute('data-image');
      popupImage.src = imageUrl;
      const rect = work.getBoundingClientRect();
      popup.style.left = `${rect.right + -650}px`;
      popup.style.top = `${rect.top}px`;
      popup.classList.remove('hidden');
      popup.style.display = 'block';
    });

    work.addEventListener('mouseleave', () => {
      popup.classList.add('hidden');
      popup.style.display = 'none';
    });

    work.addEventListener('click', () => {
      const link = work.querySelector('a').href;
      window.location.href = link;
    });
  });
});

// JavaScript to animate letter-by-letter display
window.onload = function() {
  const text = "Coded By Tasneem Salim";  // Text you want to animate
  const element = document.getElementById("navHead");
  let index = 0;

  // Clear the content initially
  element.innerHTML = '';

  function addLetter() {
      // Add the next letter from the text to the element
      element.innerHTML += text[index];
      index++;

      // If there are more letters, call this function again after 1 second
      if (index < text.length) {
          setTimeout(addLetter, 200);  // 1000 ms = 1 second
      }
  }

  // Start the animation
  addLetter();
}





document.getElementById("myButton").onclick = function () {
  location.href = "https://github.com/Tasniema";
};


window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.first-cards') ;
  const triggerBottom = window.innerHeight / 5 * 4;

  cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
          card.classList.add('visible');
      } else {
          card.classList.remove('visible');
      }
  });
});


window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.second-cards') ;
  const triggerBottom = window.innerHeight / 5 * 4;

  cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
          card.classList.add('visible');
      } else {
          card.classList.remove('visible');
      }
  });
});

