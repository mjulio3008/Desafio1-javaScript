const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyName = document.querySelector(".currency-name")
const currencyImage = document.querySelector(".currency-img")

function convertValues() {
   const inputCurrency = document.querySelector(".input-currency").value
   const inputCurrencyValue = Number(inputCurrency.replace(",", "."))
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")

   const dolarToday = 5.2
   const euroToday = 6.2
   const libraToday = 6.78
   const bitcoinToday = 389.240

   console.log(currencySelect.value)

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue || 0)

   if (currencySelect.value === "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format((inputCurrencyValue || 0) / dolarToday)
   }

   if (currencySelect.value === "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format((inputCurrencyValue || 0) / euroToday)
   }

   if (currencySelect.value === "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format((inputCurrencyValue || 0) / libraToday)
   }

   if (currencySelect.value === "bitcoin") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "BTC"
      }).format((inputCurrencyValue || 0) / bitcoinToday)
   }


}

function changeCurrency() {
   const currencyName = document.querySelector(".currency-name")
   const currencyImage = document.querySelector(".currency-img")

   if (currencySelect.value === "dolar") {
      currencyName.innerHTML = "Dolar americano"
      currencyImage.src = "./assets/dolar.png"
   }

   if (currencySelect.value === "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/euro.png"
   }

   if (currencySelect.value === "libra") {
      currencyName.innerHTML = "Libra esterlina"
      currencyImage.src = "./assets/libra.png"
   }

   if (currencySelect.value === "bitcoin") {
      currencyName.innerHTML = "Bitcoin"
      currencyImage.src = "./assets/bitcoin.png"
   }

   convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

changeCurrency()
