<?php
  $quiz = array('question' => 'ゲーム市場最も売れたゲームは？',
    'answers' => array('ゲームボーイ','ニンテンドーDS','WiiU','プレイステーション'),
    'correct' => 'ニンテンドーDS'
  );
  $quizCount = count($quiz);

echo '<script type="text/javascript">';
echo 'const quizLength = '.$quizCount.';';

echo 'const button = document.getElementsByTagName("button");';
echo 'console.log(button);';
echo 'const buttonLength = button.length;';

echo 'const setupQuiz = () => {';
  echo 'document.getElementById("js-question").textContent = "'.$quiz["question"].'";';
  $buttonIndex = 0;
  echo 'while ('.$buttonIndex.' < buttonLength) {';
    /*echo 'button['.$buttonIndex.'].textContent = "'.$quiz["answers"][$buttonIndex].'";';
    $buttonIndex++;
  echo '}';
echo '};';

echo 'setupQuiz();';

echo 'let buttonHandler = 0;';
echo 'while (buttonHandler < buttonLength) {';
echo 'button[buttonHandler].addEventListener("click", (e) => {';
echo 'if (e.target.textContent === "'.$quiz["correct"].'") {';
echo 'window.alert("正解");';
echo '} else {';
echo 'window.alert("不正解");';
echo '}';
echo '});';
echo 'buttonHandler++;';
echo'}</script>';

?>

 
