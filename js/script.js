const words = ["A Developer", "A Creator"];
let count = 0;
let index = 0;
let currentWord = "";
let letter = "";
let isDeleting = false;
let typeSpeed = 400;

const textType = document.querySelector(".text-type");

(function type() {
  if (count === words.length) {
    count = 0;
  }
  currentWord = words[parseInt(count, 10)];

  if (!isDeleting) {
    letter = currentWord.slice(0, ++index);
  } else {
    letter = currentWord.slice(0, --index);
  }

  textType.textContent = letter;

  if (letter.length === currentWord.length) {
    isDeleting = true;
    typeSpeed /= 2;
  }
  if (letter.length === 0) {
    isDeleting = false;
    typeSpeed *= 2;
    count++;
  }

  setTimeout(type, typeSpeed);
})();