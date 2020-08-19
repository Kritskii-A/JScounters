// Increase counter value every second

function counterFirst() {
  const counter = document.querySelector(".counter");
  const interval = setInterval(function () {
    counter.textContent++;
  }, 1000); //timeout
}

counterFirst();

// End

// Increase the counter by a random value after 5 seconds.

function counterRandom() {
  const counterRand = document.querySelector(".counter-random");
  const interval = setInterval(function () {
    addNum(counterRand);
  }, 5000); //timeout
}

counterRandom();

// End

// Increase the counter by a random value after clicking on the button

function counterClick() {
  const counterClicking = document.querySelector(".counter-click");
  const buttonAdd = document.querySelector("button");
  buttonAdd.onclick = () => {
    addNum(counterClicking);
  };
}

counterClick();

// END

// Fn add numbers
const addNum = (selector) => {
  selector.textContent = +selector.textContent + randomInteger();
};

// Random
function randomInteger(min = 5, max = 30) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
// END Random
