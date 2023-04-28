const inputkm = document.querySelector('.km')
const inputt = document.querySelector('.t')
const form = document.querySelector('.calculator__form')
const end = document.querySelector('.end')
let price = 5500

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const km = inputkm.value
    const t = inputt.value
    price = price + km * 15 + t * 200
    end.textContent = 'Итоговая цена: ' + price + '₽'
    price=5500
})