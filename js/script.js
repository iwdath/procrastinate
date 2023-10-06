function watchForHover() {
  let lastTouchTime = 0;

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return;
    document.body.classList.add('has-hover');
  };

  function disableHover() {
    document.body.classList.remove('has-hover');
  };

  function updateLastTouchTime() {
    lastTouchTime = new Date();
  };

  document.addEventListener('touchstart', updateLastTouchTime, true);
  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);

  enableHover();
}

watchForHover();


let phrases = [
  { text: 'отправить другу смешную гифку', image: 'img/1.gif' },
  { text: 'разобраться, о чём поют рэперы', image: 'img/3.png' },
  { text: 'расставить книги на полке по цвету', image: 'img/5.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'img/8.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'img/9.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'img/7.png' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'img/10.png' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'img/6.png' },
  { text: 'посмотреть скидки на авиабилеты', image: 'img/2.png' },
  { text: 'Юрий Дудь', image: 'img/4.png' }
];

let previousIndex = 2;

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);

  while (randIndex === previousIndex) {
    randIndex = Math.floor(Math.random() * arr.length);
  };

  previousIndex = randIndex;

  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);

  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  };
});

for (let i = 0; i <= 2; i++) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
};