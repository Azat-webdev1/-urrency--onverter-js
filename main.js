//'use strict';
const rates = {
  "RUB": {
  "ID": "",
  "NumCode": "643",
  "CharCode": "RUB",
  "Nominal": 1,
  "Name": "рубль",
  "Value": 1,
  "Previous": 1
},};

const input = document.querySelector('#input'),
  result = document.querySelector('#result'),
  selectLists = document.querySelectorAll('.select'),
  //selectList = document.querySelector('.select'),
  button = document.querySelector('button'),
  select = document.querySelector('#select');

async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;
  
  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
  
};
getCurrencies();

function resultValue() {
  selectLists.forEach((elem) => {
    if (!elem.selectedIndex) {
        console.log(1);
        result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
      }
    if (elem.selectedIndex) {
        console.log(2);
        result.value = ((parseFloat(input.value) * rates.USD.Value) / rates[select.value].Value).toFixed(2);
      }
    });
  };
  
button.addEventListener('click', () => {
  resultValue();
  console.log(3);
  input.oninput = resultValue;
  select.oninput = resultValue;
  
});
