const userInput = document.getElementById("userInput"),
  operations = Array.from(document.getElementsByClassName("operations")),
  numbers = Array.from(document.getElementsByClassName("numbers"));

numbers.forEach((i) => {
  i.addEventListener("click", (e) => {
    if (userInput.innerText === "NaN" || userInput.innerText === "0") {
      userInput.innerText = "";
    }
    userInput.innerText += e.target.innerHTML.trim();
  });
});

operations.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        userInput.innerText = 0;
        break;
      case "DEL":
        userInput.innerText = userInput.innerText.substring(
          0,
          userInput.innerText.length - 1
        );
        if (userInput.innerText.length == 0) userInput.innerText = 0;
        break;
      case "=":
        try {
          userInput.innerText = eval(userInput.innerText);
        } catch {
          userInput.innerText = 'Error';
        }
        break;
      default:
        userInput.innerText += e.target.innerText;
        break;
    }
  });
});