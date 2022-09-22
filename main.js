const dateInput = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const submit = document.querySelector("#submit");
const text = document.querySelector("#message");

const addDate = (date) => {
  let add = 0;
  date = date.replaceAll("-", "");
  for (let count of date) {
    add = add + Number(count);
  }
  return add;
};

function showText(msg) {
  text.style.display = "inline";
  text.innerText = msg;
}

function checkLuckyNum(dateSum, ln) {
  console.log(dateSum, ln);
  if (dateSum % ln == 0) {
    return showText(ln + " is your lucky number! 🥳🥳🎊🎉");
  } else {
    showText(ln + " is not your Lucky Number 🤔");
  }
}

submit.addEventListener("click", () => {
  const input = dateInput.value;
  const ln = luckyNum.value;

  if (input && ln) {
    const dateSum = addDate(input);
    checkLuckyNum(dateSum, ln);
  } else {
    showText("Please! Enter Both Digit 🛑");
  }
});
