'use strict';
/*
//gọi một bộ chọn tham chiếu tới html hoặc từ css
console.log(document.querySelector('.message').textContent);
//them nội dung vào

console.log(
  (document.querySelector('.message').textContent = 'Correct Number !')
);
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
//đặt đối số cho hàm intput rỗng  trong html
console.log((document.querySelector('.guess').value = 23)); // thêm giá trị vào hàm input
console.log(document.querySelector('.guess').valeu); // value là giá trị của hàm input*/
// xử lý click
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  //triển khai logic /đoán k cho số
  if (!guess) {
    displayMessage('no number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess wrong
    // bản rút gọn
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!' : 'too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } /*
    /*
    //bản chưa rút gọn
    /*
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    /*for (let i = 1; i <= 20; i++) {
      let ha = 20 - i;
     
      document.querySelector('.score').textContent = ha;
    }*/ /*
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = 'score';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
