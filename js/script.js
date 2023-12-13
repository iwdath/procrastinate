// disabling hover on mobile devices
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
};

watchForHover();


// replace text, image and alt when you click on the button
let phrases = [
  { text: 'отправить другу смешную гифку', image: 'img/1.gif', alt: 'птица двигает головой вперёд-назад' },
  { text: 'разобраться, о чём поют рэперы', image: 'img/3.png', alt: 'человек показывает жест рок-н-ролл' },
  { text: 'расставить книги на полке по цвету', image: 'img/5.png', alt: 'женщина читает книгу рядом с книжной полкой' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'img/8.png', alt: 'кассета с грустным лицом' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'img/9.png', alt: 'ноутбук с текстом на экране: 1 сезон 8 серий' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'img/7.png', alt: 'новостная газета с плачущим эмодзи' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'img/10.png', alt: 'открытый конверт с письмом' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'img/6.png', alt: 'вантовый мост между двумя берегами' },
  { text: 'посмотреть скидки на авиабилеты', image: 'img/2.png', alt: 'рука держит два авиабилета' },
  { text: 'Юрий Дудь', image: 'img/4.png', alt: 'видеоплеер с изображением человека и ползунком прогресса' }
];

let previousIndex = 2;

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);

  while (randIndex === previousIndex) {
    randIndex = Math.floor(Math.random() * arr.length);
  };

  previousIndex = randIndex;

  return arr[randIndex];
};

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);

  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);
  image.alt = randomElement.alt;

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  };
});

// change text, image and alt when entering the site
for (let i = 0; i <= 2; i++) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
  image.alt = phrases[i].alt;
};