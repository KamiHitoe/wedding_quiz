<template>
  <div>
    <div class="container">
      <div class="quiz-title">
        <h2>Q1. 新婦が飼っているこのうさぎの名前は？</h2>
      </div>
      <div class="flex-container">
        <div class="learge-img">
          <img src="../assets/wedding_quiz01.jpg">
        </div>
        <div class="quiz-selection">
          <ol>
            <li>メル</li>
            <li>キャラメル</li>
            <li>ポーレット</li>
          </ol>
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

.learge-img img {
  width: 400px;
  height: auto;
}

</style>
