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
          <input class="answer-input" name="answer" id="1" type="radio" value="1" v-model="number">
          <label class="answer-label" for="1">1</label>
          <input class="answer-input" name="answer" id="2" type="radio" value="2" v-model="number">
          <label class="answer-label" for="2">2</label>
          <input class="answer-input" name="answer" id="3" type="radio" value="3" v-model="number">
          <label class="answer-label" for="3">3</label>
          <br>
          <!-- <input class="answer-submit" type="submit" value="決定する"> -->
        </form>
      </div>
        <button class="answer-submit" @click="postAnswer">回答する</button>
      <div class="next-button">
        <router-link to="/2" @click="postAnswer">次へ</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      id: "1",
      number: "",
    }
  },
  methods: {
    postAnswer() {
      axios.post(
        "https://firestore.googleapis.com/v1/projects/wedding-quiz-ac222/databases/(default)/documents/answers",
        {
          fields: {
            id: {
              integerValue: this.id
            },
            number: {
              integerValue: this.number
            },
          }
        },
      )
      .then(response => {
        console.log(response)
      })
    }
  },
}
</script>

<style scoped>
.learge-img img {
  width: 400px;
  height: auto;
}

</style>
