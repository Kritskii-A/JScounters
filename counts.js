// Increase counter value every second
// Увеличение значения счетчика каждую секунду

function counterFirst() {
  const counter = document.querySelector(".counter"); //get value
  setInterval(function () {
    counter.textContent++;
  }, 1000); //timeout
}

counterFirst();

// End

// Increase the counter by a random value after 5 seconds.
// Увеличение значения счетчика на случайное значение каждые 5 секунд.

function counterRandom() {
  const counterRand = document.querySelector(".counter-random"); //get value
  setInterval(function () {
    addNum(counterRand);
  }, 5000); //timeout
}

counterRandom();

// End

// Increase the counter by a random value after clicking on the button
// Увеличение значения счетчика на случайное значение при клике на кнопку.

function counterClick() {
  const counterClicking = document.querySelector(".counter-click"); //get value
  const buttonAdd = document.querySelector("button"); //get button
  buttonAdd.onclick = () => {
    addNum(counterClicking);
  };
}

counterClick();

// END

// Change form
// Если выбрать значение "Another", то форма будет заменена на поле ввода
function changeForm() {
  const idForm = document.querySelector(".formKnown"); //get id form

  idForm.onclick = () => {
    let fullOptions = document.querySelector("#known"); //get options
    if (fullOptions.options !== undefined) {
      let youChose = fullOptions.options[fullOptions.selectedIndex].text; //get selected option
      if (youChose === "Another") {
        idForm.innerHTML =
          '<input class="form-control" placeholder="Add value" name="known" id="known" type="text" />'; //change value
      }
    }
  };
}

changeForm();

// End change form

// Fn add numbers
const addNum = (selector) => {
  selector.textContent = +selector.textContent + randomInteger();
};

// Random
function randomInteger(min = 5, max = 30) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
// END Random
