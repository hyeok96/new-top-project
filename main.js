import myData from './JSON/myData.json'

const upScrollBarEl = document.querySelector('.up-scroll-bar');
const sec2El = document.querySelector('.sec2');
let upScrean = false
upScrollBarEl.addEventListener('click', function () {
  upScrean = !upScrean

  if (upScrean) {
    sec2El.classList.add('up')
  } else {
    sec2El.classList.remove('up')
  }
});

// console.log(myData)



const budgetEl = document.querySelector('.budget')
budgetEl.textContent = myData.accountMoney

const accountNumber =document.querySelector('.account-number')
accountNumber.textContent = myData.accountNumber

const tripEl = document.querySelector('.num1 .title')
tripEl.textContent = myData.hopelist1.name

const moneyEl = document.querySelector('.num1 .money')
moneyEl.textContent = myData.hopelist1.money

const fridgeEl = document.querySelector('.num2 .title')
fridgeEl.textContent = myData.hopelist1.name

const money2El = document.querySelector('.num2 .money')
money2El.textContent = myData.hopelist1.money
