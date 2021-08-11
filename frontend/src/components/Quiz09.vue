<template>
  <div>
    <div class="container">
      <div class="quiz-title">
        <h2>Q9. 新婦が今まで遭遇したことが<br>ない動物は？</h2>
      </div>
      <div class="flex-container">
        <div class="flex-item1">
          <div class="middle-img">
            <img src="../assets/wedding_quiz18.jpg">
          </div>
          <div class="quiz-selection">
            <h3>1. くま</h3>
          </div>
        </div>
        <div class="flex-item2">
          <div class="middle-img">
            <img src="../assets/wedding_quiz19.jpg">
          </div>
          <div class="quiz-selection">
            <h3>2. きつね</h3>
          </div>
        </div>
        <div class="flex-item3">
          <div class="middle-img">
            <img src="../assets/wedding_quiz20.jpg">
          </div>
          <div class="quiz-selection">
            <h3>3. ふくろう</h3>
          </div>
        </div>
        
      </div>

      <div class="answer-form">
        <form name="answer">
          <input class="answer-input" name="answer" id="1" type="radio" value="1" v-model="number">
          <label class="answer-label1" for="1">1</label>
          <input class="answer-input" name="answer" id="2" type="radio" value="2" v-model="number">
          <label class="answer-label2" for="2">2</label>
          <input class="answer-input" name="answer" id="3" type="radio" value="3" v-model="number">
          <label class="answer-label3" for="3">3</label>
          <br>
        </form>
      </div>
      
      <div class="validate" v-if="error">
      <p>{{error}}</p>
      </div>
      
      <div class="next-button">
        <router-link to="/10">
          <button class="answer-submit" @click="postAnswer" v-if="number">回答して<br>次へ</button>
          <button class="answer-submit" @click="checkForm" v-else>回答して<br>次へ</button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      number: null,
      error: null,
    }
  },
  methods: {
    postAnswer() {
      if (!this.$store.state.username) {
        window.location.href = '/';
      }
      if (this.$store.state.answerArray.length > 8) {
        this.$store.state.answerArray.splice(8, 1, this.number);
      } else {
        this.$store.state.answerArray.splice(8, 0, this.number);
      }
    },
    checkForm: function(e) {
      if (this.username) {
        return true;
      }

      if (!this.username) {
        this.error = '回答を選択してください';
      }

      e.preventDefault();
    },
  },
}
</script>


<style scoped>
.middle-img img {
  width: 200px;
  height: 250px;
}

</style>
