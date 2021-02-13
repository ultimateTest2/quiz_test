(function() {
  const question = "ゲーム市場最も売れたゲームは？";
const answers = [
  'スーパーファミコン',
  'ニンテンドースイッチ',
  'ニンテンドーDS',
  'WiiU'
];
const correct = 'ニンテンドーDS';
document.getElementById('js-question').textContent = question;
const $button = document.getElementsByTagName('button');
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

console.log($button[2].textContent);

$button[0].addEventListener('click', () => {
  if (correct === $button[0].textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
$button[1].addEventListener('click', () => {
  if (correct === $button[1].textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
/*$button[2].addEventListener('click', () => {
  if (correct === $button[2].textcontent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});*/
$button[2].addEventListener('click', () => {
  console.log($button[2]);
  if (correct === $button[2].textContent) {
  window.alert('正解');
  } else {
  window.alert('不正解');
  }
  });
$button[3].addEventListener('click', () => {
  if (correct === $button[3].textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});

console.log(correct);
})();