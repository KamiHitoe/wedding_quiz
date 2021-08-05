<template>
  <div>
    <div class="container">
      <div class="quiz-title">
        <h2>Q2. 新郎が持っていないフィギュアは？</h2>
      </div>
      <div class="flex-container">
        <div class="flex-item1">
          <div class="middle-img">
            <img src="../assets/wedding_quiz02.jpg">
          </div>
          <div class="quiz-selection">
            <h3>「新世紀エヴァンゲリオン」</h3>
            <br>
            <h3>惣流・アスカ・ラングレー</h3>
          </div>
        </div>
        <div class="flex-item2">
          <div class="middle-img">
            <img src="../assets/wedding_quiz03.jpg">
          </div>
          <div class="quiz-selection">
            <h3>「涼宮ハルヒの憂鬱」</h3>
            <br>
            <h3>涼宮ハルヒ</h3>
          </div>
        </div>
        <div class="flex-item3">
          <div class="middle-img">
            <img src="../assets/wedding_quiz04.jpg">
          </div>
          <div class="quiz-selection">
            <h3>「アイカツ！」</h3>
            <br>
            <h3>星宮いちご</h3>
          </div>
        </div>
        

      </div>

      <div class="answer-form">
        <form name="answer">
          <input class="answer-input" name="answer" id="1" type="radio" value="1">
          <label class="answer-label" for="1">1</label>
          <input class="answer-input" name="answer" id="2" type="radio" value="2">
          <label class="answer-label" for="2">2</label>
          <input class="answer-input" name="answer" id="3" type="radio" value="3">
          <label class="answer-label" for="3">3</label>
          <br>
          <input class="answer-submit" type="submit" value="決定する">
        </form>
      </div>
      <div class="next-button">
        <router-link to="/2">次へ</router-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>

.middle-img img {
  width: 200px;
  height: 250px;
}

</style>
