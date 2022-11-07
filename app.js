const money = document.querySelector('.money__user');
const moneyBalance = document.querySelector('.money__balance');

let increase = 0;

// 소지금 클릭할 때마다 1000원씩 증가
money.addEventListener('click', () => {
  increase = increase + 1000;

  moneyBalance.innerText = increase + ' 원';
});
