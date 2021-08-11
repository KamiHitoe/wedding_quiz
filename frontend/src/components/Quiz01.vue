<template>
  <div>
    <div class="container">
      <div class="quiz-title">
        <h2>Q1. 新婦が飼っている<br>このうさぎの名前は？</h2>
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
        <router-link to="/2">
          <button class="answer-submit" @click="postAnswer" v-if="number">回答して<br>次へ</button>
          <button class="answer-submit" @click="checkForm" v-else>回答して<br>次へ</button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from '../firebase'

export default {
  data() {
    return {
      id: "1",
      number: null,
      error: null,
      db: null,
      collection: null,
    }
  },
  methods: {
    postAnswer() {
      this.db = firebase.firestore();
      this.collection = this.db.collection('answers');

      this.collection.add({
        id: this.id,
        number: this.number,
        username: this.$store.state.username,
      })
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
.learge-img img {
  width: 400px;
  height: auto;
}

</style>
