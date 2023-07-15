const myImage = document.querySelector("img");
const audio = document.getElementById('myAudio');
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sloth-logo.png") {
    myImage.setAttribute("src", "images/sword.jpg");
    audio.play();
  } else {
    myImage.setAttribute("src", "images/sloth-logo.png");
    audio.pause();
  }
})

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} is rad, like a really rad person`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName}is rad, like a really rad person`;
}

myButton.addEventListener("click", () => {
  setUserName();
})