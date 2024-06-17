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
const myWorks = document.querySelectorAll('.my-work');
  const popup = document.getElementById('popup');
  const popupLinks = document.getElementById('popup-links');
  const closeBtn = document.querySelector('.close-btn');


window.onscroll = function() {


  if(window.scrollY>=100 ){
    mymenu.style.display ="block";
  }else if(window.innerWidth > 540){
    mymenu.style.display ="block";
  }
  else{
    mymenu.style.display="none"
  }



  if(window.scrollY>= 700 && window.scrollY<= 1050){
    popup.style.display = "block"
  }else{
  popup.style.display = "none"
  }

  const projectLinks = {
      "HVAC": [
        { text: "", url: "https://tasniema.github.io/HVAC-project/" ,img: "https://tse1.mm.bing.net/th?id=OIP.x6QNfP4eBNKOeoYwH23s2QHaE7&pid=Api&P=0&h=220" }
    ],
    "Huddle": [
        { text: "", url: "https://tasniema.github.io/Huddle-Project/", img:"https://tse3.explicit.bing.net/th?id=OIP.HCRCQv8FE0psxN_i-4TcPwHaD3&pid=Api&P=0&h=220" },
    ],
    "Dell": [
        { text: "", url: "https://tasniema.github.io/Dell-Website/" , img:"https://tse2.mm.bing.net/th?id=OIP.NP12wbK-M0fWeUEOoz18nAHaEZ&pid=Api&P=0&h=220" },
    ]
  };

  function showPopup(links) {
      popupLinks.innerHTML = "";
      links.forEach(link => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = link.url;
          const img = document.createElement('img');
          img.src = link.img;
          a.appendChild(img);
          a.appendChild(document.createTextNode(link.text));
          li.appendChild(a);
          popupLinks.appendChild(li);
      });
      popup.classList.remove('hidden');
  }

  function hidePopup() {
      popup.classList.add('hidden');
  }

  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  window.addEventListener('scroll', () => {

      myWorks.forEach(work => {
        work.addEventListener("mousemove",(event)=>{

        })
          if (isInViewport(work)) {
              const title = work.querySelector('h2').textContent;
              if (projectLinks[title]) {
                  showPopup(projectLinks[title]);
              }
          }
      });
  });

  document.addEventListener('mousemove', (event) => {
    if (!popup.classList.contains('hidden')) {
      popup.style.top = `${event.clientY + 20}px`;
      popup.style.left = `${event.clientX + 20}px`;
    }
  });


  closeBtn.addEventListener('click', hidePopup);

  window.addEventListener('click', (event) => {
      if (event.target == popup) {
          hidePopup();
      }
  });

};


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