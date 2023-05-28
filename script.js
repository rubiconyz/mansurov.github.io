const sidemenu = document.getElementById("sidemenu");

window.addEventListener("resize", function () {
  const close = document.querySelector(".fa-times");
  if (window.innerWidth >= 700) {
    close.classList.remove("active");
    sidemenu.style.right = "0";
  } else {
    sidemenu.style.right = "-200px";
  }
});

window.addEventListener("scroll", function () {
  const menuBackground = document.querySelector("nav ul");
  if (window.pageYOffset > 0) {
    menuBackground.classList.remove("transparent");
    menuBackground.classList.add("active");
  } else if (window.pageYOffset == 0) {
    menuBackground.classList.remove("active");
    menuBackground.classList.add("transparent");
  }
});

// TABS
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

tablinks.forEach((tablink) => {
  tablink.addEventListener("click", function (event) {
    for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    tabcontents.forEach((tabcontent) => {
      for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
    });

    event.currentTarget.classList.add("active-link");
    const tabId = event.currentTarget.getAttribute("data-type");
    console.log(tabId);
    document.getElementById(tabId).classList.add("active-tab");
  });
});

// MOBILE MENU
const close = document.querySelector(".fa-times");
const open = document.querySelector(".fa-bars");

function openmenu() {
  close.classList.add("active");
  sidemenu.style.right = "0";
}
function closemenu() {
  close.classList.remove("active");
  sidemenu.style.right = "-200px";
}

close.addEventListener("click", closemenu);
open.addEventListener("click", openmenu);

// FORM
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyhb38pqnqOpa1KicBDAIuzSyvOhy5W0hub5jhAf_74Z_10kiI_7lJx4fXOpcDgw7Ga/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (response.status === 200) {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      }
    })
    .catch((error) => console.error("Error!", error.message));
});


document.getElementById("see-more-btn").addEventListener("click", function() {
  var projectContainers = [
    document.getElementById("project-container-1"),
    document.getElementById("project-container-2"),
    document.getElementById("project-container-3"),
    document.getElementById("project-container-4"),
    document.getElementById("project-container-5"),
    document.getElementById("project-container-6"),
  ];
  
  projectContainers.forEach(function(projectContainer) {
    if (projectContainer.style.display === "none" || projectContainer.style.display === "") {
      projectContainer.style.display = "block";
    } else {
      projectContainer.style.display = "none";
    }
  });

  if (projectContainers.length > 0) {
    projectContainers[0].scrollIntoView({ behavior: "smooth" });
  }
});

