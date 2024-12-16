
const USD = 6.05
const EUR = 6.36
const GBP = 7.64

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
  
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
  
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
  }
}

function convertCurrency(amount, price, symbol) {
  try {
    footer.classList.add("show-result")

    description.textContent = `${symbol} 1 = R$ ${formatCurrencyBRL(price)}`

    let total = formatCurrencyBRL(amount * price)
    result.textContent = `${total} Reais`
  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    console.alert("Não foi possível converter. Tente mais tarde")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "decimal",
    currency: "BRL",
  })
}