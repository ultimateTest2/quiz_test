<?php
  $quiz = array('question' => 'ゲーム市場最も売れたゲームは？',
  'answers' => array('ゲームボーイ','ニンテンドーDS','WiiU','プレイステーション'),
  'correct' => 'ニンテンドーDS'
);
$quizCount = count($quiz);
echo <<<EOM
<script type="text/javascript">
const quizLength = {$quizCount};
console.log(quizLength);

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
document.getElementById('js-question').textContent = "{$quiz[question]}";
EOM;

$buttonIndex = 0;
echo <<<EOM
while ({$buttonIndex} < buttonLength) {
button[{$buttonIndex}].textContent = "{$quiz[answers][$buttonIndex]}";
{$buttonIndex}++;
}
}

setupQuiz();

let buttonHandler = 0;
while (buttonHandler < buttonLength) {
button[buttonHandler].addEventListener('click', (e) => {
if (e.target.textContent === "{$quiz[correct]}") {
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
</script>
EOM;
?>

 
