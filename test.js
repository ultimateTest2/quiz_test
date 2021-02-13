<script type="text/javascript">
  const quizLength = 3;
  const button = document.getElementsByTagName("button");
  const buttonLength = button.length;
  const setupQuiz = () => {
    document.getElementById("js-question").textContent = "ゲーム市場最も売れたゲームは？";
    while (0 < buttonLength) {
      button[0].textContent = "ゲームボーイ";
    }
  };
  setupQuiz();
  let buttonHandler = 0;
  while (buttonHandler < buttonLength) {
    button[buttonHandler].addEventListener("click", (e) => {
      if (e.target.textContent === "ニンテンドーDS") {
        window.alert("正解");
      } else {
        window.alert("不正解");
      }
      //buttonHandler++;
    }
  }
</script>










<script type="text/javascript">
  const quizLength = 3;
  const button = document.getElementsByTagName("button");
  const buttonLength = button.length;
  const setupQuiz = () => {
    document.getElementById("js-question").textContent = "ゲーム市場最も売れたゲームは？";
    while (0 < buttonLength) {
      button[0].textContent = "ゲームボーイ";
    }
  };
  setupQuiz();
  let buttonHandler = 0;
  while (buttonHandler < buttonLength) {
    button[buttonHandler].addEventListener("click", (e) => {
      if (e.target.textContent === "ニンテンドーDS") {
        window.alert("正解");
      } else {
        window.alert("不正解");
      }
      buttonHandler++;
</script>