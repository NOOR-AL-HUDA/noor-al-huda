////////////////////////////////////////
// partner images slider >> using jquery
////////////////////////////////////////

$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    auto: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

// partner images slider >> using js DOM method
// const brandslider = document.getElementById("autoWidth");
// brandslider.lightSlider({
//   autoWidth: true,
//   auto: true,
//   loop: true,
//   onSliderLoad: function () {
//     $("#autoWidth").removeClass("cS-hidden");
//   },
// });

////////////////////////////////////////
// dark mode config
////////////////////////////////////////

let darkmode = localStorage.getItem("darkmode");
// console.log(typeof darkmode);

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "enabled");

  //changing the btn icon
  let darkmodebtn = document.querySelector(".darkmodebtn");
  darkmodebtn.innerHTML = `<i class="fas fa-sun"></i>`;
  darkmodebtn.style.color = "yellow";

  let navdmbtn = document.querySelector("#navdarkmodebtn");
  navdmbtn.innerHTML = `<i class="fas fa-sun"></i>`;
  navdmbtn.style.color = "yellow";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);

  // changing btn icon
  let darkmodebtn = document.querySelector(".darkmodebtn");
  darkmodebtn.innerHTML = `<i class="fas fa-moon"></i>`;
  darkmodebtn.style.color = "white";

  let navdmbtn = document.querySelector("#navdarkmodebtn");
  navdmbtn.innerHTML = `<i class="fas fa-moon"></i>`;
  navdmbtn.style.color = "black";
};

if (darkmode === "enabled") {
  enableDarkMode();
}
// else {
//   disableDarkMode();
// }

function toggledarktheme() {
  // console.log("dark mode on");

  darkmode = localStorage.getItem("darkmode");
  if (darkmode === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }

  // old method => working
  // let bodytag = document.body;
  // bodytag.classList.toggle("darkmode");
  // if (document.body.classList.value === "darkmode") {
  //   let darkmodebtn = document.querySelector(".darkmodebtn");
  //   darkmodebtn.innerHTML = `<i class="fas fa-sun"></i>`;
  //   darkmodebtn.style.color = "yellow";
  // } else {
  //   let darkmodebtn = document.querySelector(".darkmodebtn");
  //   darkmodebtn.innerHTML = `<i class="fas fa-moon"></i>`;
  //   darkmodebtn.style.color = "black";
  // }
}

////////////////////////////////////////
// mobile navbar handler
////////////////////////////////////////

function mobilenavbarhandler() {}

const mobilenavbar = document.querySelector(".mobilenavbar");
if (window.innerWidth > 900) {
  document.querySelector(".mobilenavbar").style.transform = "translateX(100%)";
}

function togglenavbtn() {
  // document.querySelector(".mobilenavbar").style.transform = "translateX(0)";
  let navtag = document.querySelector(".mobilenavbar");
  navtag.classList.toggle("active");
  // console.log(window.innerWidth);
}

////////////////////////////////////////
// send mail
////////////////////////////////////////

function sendEmail() {
  // e.preventDefault();
  let name = document.getElementById("exampleInputName").value;
  let email = document.getElementById("exampleInputEmail1").value;
  let message = document.getElementById("floatingTextarea").value;

  let emailbody = `name: ${name} and email: ${email} and message: ${message}`;
  try {
    Email.send({
      SecureToken: "fc7deaf7-ded9-4c7f-ae1f-755171a0089a",
      To: "tacc1126@gmail.com",
      From: "tacc1126@gmail.com",
      Subject: "Mail From Noor Ul Huda Web",
      Body: emailbody,
    }).then(() => {
      document.querySelector(".toastsuccess").style.transform = "translateY(0)";
      setTimeout(() => {
        document.querySelector(".toastsuccess").style.transform =
          "translateY(500%)";
      }, 5000);
    });
  } catch (error) {
    console.error("internal server error", error);
  }
}

////////////////////////////////////////
// toast message
////////////////////////////////////////

const toastclosebtn = document.getElementById("toastclose");
if (toastclosebtn) {
  toastclosebtn.addEventListener("click", () => {
    document.querySelector(".toastsuccess").style.transform =
      "translateY(400%)";
  });
}

// const ftoastbtn = document.getElementById("failedtoastclose");
// ftoastbtn.addEventListener("click", () => {
//   document.querySelector(".toastfailed").style.transform =
//     "translateY(400%)";
// });
