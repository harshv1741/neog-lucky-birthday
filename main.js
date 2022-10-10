const dateInput = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const text = document.querySelector("#message");
const infoSE = document.querySelector("#infoSE");
const failSE = document.querySelector("#fail-sound-effect");
const successSE = document.querySelector("#success-sound-effect");
const resetSE = document.querySelector("#reset-sound-effect");

const addDate = (date) => {
  let add = 0;
  date = date.replaceAll("-", "");
  for (let count of date) {
    add += Number(count);
  }
  return add;
};

function showText(msg) {
  text.style.display = "inline";
  text.innerText = msg;
}

function checkLuckyNum(dateSum, ln) {
  if (dateSum % ln == 0) {
    showText(ln + " is your lucky number! 🥳🥳🎊🎉");
    successSE.play();
  } else {
    showText(ln + " is not your Lucky Number 🤔");
    failSE.play();
  }
}

submit.addEventListener("click", () => {
  const input = dateInput.value;
  const ln = luckyNum.value;

  if (input && ln) {
    const dateSum = addDate(input);
    checkLuckyNum(dateSum, ln);
  } else {
    showText("🛑 Please! Enter Both Digit");
    infoSE.play();
  }
});

reset.addEventListener("click", () => {
  text.innerText = "";
  luckyNum.value = "";
  dateInput.value = "";
  resetSE.play();
});
