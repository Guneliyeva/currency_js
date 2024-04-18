const button = document.querySelector("#btn");

const currentFunction = () => {
  const azn = document.querySelector("#azn").value;
  const currency = document.querySelector("#currency").value;
  const h3 = document.querySelector("#result");

  fetch("https://api.exchangerate-api.com/v4/latest/AZN")
    .then((res) => res.json())
    .then((data) => {
      const rates = data.rates[currency];
      const result = azn * rates;
      h3.textContent = `${azn} AZN = ${result.toFixed(2)} ${currency}`;
    });
};

button.addEventListener("click", currentFunction);
