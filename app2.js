const quiz = [
  {
    question: 'ゲーム市場,最も売れたゲームは？',
    answers:[
      'スーパーファミコン',
      'プレイステーション',
      'ニンテンドーDS',
      'スイッチ'
    ],
    correct: 'ニンテンドーDS'
  },{
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers:[
      'MONSTER',
      'スーパーマリオブラザーズ',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: '星のカービィ'
  }, {
    question: 'ファイナルファンタジーIVの主人公は？',
    answers: [
      'セシル',
      'フリオニール',
      'ティーダ',
      'ティーダ'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

let buttonHandler = 0;
while (buttonHandler < buttonLength) {
  $button[buttonHandler].addEventListener('click', (e) => {
    if (e.target.textContent === quiz[quizIndex].correct) {
      window.alert("正解");
    } else {
      window.alert("不正解")
    }
    quizIndex++;
    if(quizIndex < quizLength){
      setupQuiz();
    } else {
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
  });
  buttonHandler++
}








