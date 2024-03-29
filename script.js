const clear = document.querySelector("#clear");
const area = document.querySelector(".textArea");
const del = document.querySelector("#Delete");
const dot = document.querySelector("#dot");
const num0 = document.querySelector("#one");
const num1 = document.querySelector("#two");
const num2 = document.querySelector("#three");
const num3 = document.querySelector("#four");
const num4 = document.querySelector("#five");
const num5 = document.querySelector("#six");
const num6 = document.querySelector("#seven");
const num7 = document.querySelector("#eight");
const num8 = document.querySelector("#nine");
const num9 = document.querySelector("#ten");
const num00 = document.querySelector("#twoZeros");
const nums = document.querySelectorAll(".num");
const add = document.querySelector("#add");
const equals = document.querySelector("#equals");
const sub = document.querySelector("#sub");
const mult = document.querySelector("#mult");
const divide = document.querySelector("#divide");
const percent = document.querySelector("#percentage");
const power = document.querySelector("#power");

window.addEventListener("keydown", function (e) {
  const pressed = e.key;
  if (/\d/.test(pressed)) {
    if (startNew === true) {
      area.textContent = "";
      startNew = false;
    }
    let content = area.textContent;
    if (content.length < 6) {
      area.textContent += pressed;
    } else {
      this.window.removeEventListener("keydown", (e) => {
        e.key;
      });
    }
  }
});

let startNew = true;
let val1 = "";
let val2 = "";
let operand = "";
let result = "";
clear.addEventListener("click", () => {
  area.textContent = "";
  startNew = true;
  val1 = "";
  op = "";
  val2 = "";
});
del.addEventListener("click", () => {
  const currentText = area.textContent;
  if (currentText.length > 0) {
    area.textContent = currentText.slice(0, -1);
  }
});

nums.forEach((numbers) => {
  numbers.addEventListener("click", () => {
    if (startNew === true) {
      area.textContent = "";
      startNew = false;
    }
    let content = area.textContent;
    if (content.length < 6) {
      area.textContent += numbers.textContent;
    } else {
      numbers.disable = true;
    }
  });
});

add.addEventListener("click", () => {
  val1 += area.textContent;
  op = "+";
  startNew = true;
});
sub.addEventListener("click", () => {
  val1 -= area.textContent;
  op = "-";
  startNew = true;
});
mult.addEventListener("click", () => {
  val1 += area.textContent;
  op = "*";
  startNew = true;
});
divide.addEventListener("click", () => {
  val1 += area.textContent;
  op = "/";
  startNew = true;
});
percent.addEventListener("click", () => {
  val1 += area.textContent;
  op = "%";
  startNew = true;
});
power.addEventListener("click", () => {
  val1 += area.textContent;
  op = "^";
  startNew = true;
});

equals.addEventListener("click", () => {
  if (area.textContent === "") {
    area.textContent = "ERR";
  } else if (op === "+") {
    val2 = area.textContent;
    let prod = parseInt(val1) + parseInt(val2);
    let answer = prod.toString();
    if (answer.length > 5) {
      let first2 = answer.slice(0, 2);
      let theRest = answer.slice(2);
      let theRestLen = theRest.length;
      area.textContent = ` ${first2}e+${theRestLen}`;
    } else {
      area.textContent = prod;
      startNew = true;
    }
  } else if (op === "-") {
    val2 = area.textContent;
    area.textContent = -1 * (parseInt(val1) + parseInt(val2));
  } else if (op === "*") {
    val2 = area.textContent;
    let prod = parseInt(val1) * parseInt(val2);
    let answer = prod.toString();
    if (answer.length > 5) {
      let first2 = answer.slice(0, 2);
      let theRest = answer.slice(2);
      let theRestLen = theRest.length;
      area.textContent = ` ${first2}e+${theRestLen}`;
    } else {
      area.textContent = prod;
    }
  } else if (op === "/") {
    val2 = area.textContent;
    quot = parseFloat(val1) / parseFloat(val2);
    area.textContent = quot;
  } else if (op === "%") {
    val2 = area.textContent;
    let prod = parseFloat(val1) * 0.01 * parseInt(val2);
    let answer = prod.toString();
    if (answer.length > 5) {
      let first2 = answer.slice(0, 2);
      let theRest = answer.slice(2);
      let theRestLen = theRest.length;
      area.textContent = ` ${first2}e+${theRestLen}`;
    } else {
      area.textContent = prod;
    }
  } else if (op === "^") {
    val2 = area.textContent;
    area.textContent = parseFloat(val1) ** parseInt(val2);
  }
});
