function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}


const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log("_________________________________________");

const btnDown = document.querySelector("#down");
const btnUp = document.querySelector("#up");
const btnNo = document.querySelector("#no");
const sizeValue = document.querySelector(".fontsize");
const fontGenerator = newFontGenerator(14)
let fontSize = 14;

function* newFontGenerator(fontSize) {
  while (true) {
    let size = yield fontSize;
    if (size == "up") {
      fontSize += 2;
      yield fontSize;
    }
    else if (size == "down") {
      fontSize -= 2;
      yield fontSize;
    }
    else if (size == "no") {
      yield fontSize;
    }
  }
}

btnDown.addEventListener("click", () => {
  fontSize = fontGenerator.next().value;
  fontSize = fontGenerator.next("down").value;
  sizeValue.style.fontSize = fontSize + "px";
  sizeValue.textContent = `Font Size: ${fontSize} px`;
});

btnNo.addEventListener("click", () => {
  fontSize = fontGenerator.next().value;
  sizeValue.style.fontSize = fontSize + "px";
  sizeValue.textContent = `Font Size: ${fontSize} px`;
});

btnUp.addEventListener("click", () => {
  fontSize = fontGenerator.next().value;
  fontSize = fontGenerator.next("up").value;
  sizeValue.style.fontSize = fontSize + "px";
  sizeValue.textContent = `Font Size: ${fontSize} px`;
});

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
