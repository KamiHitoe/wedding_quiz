<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>結果発表</h1>
      </div>
    </div>
    <div class="correct_answers" v-for="correct_answer in sorted_correct_answers" :key="correct_answer.name">
      <div>id: {{ correct_answer.fields.id.integerValue }}</div>
      <div>correct_answer_num: {{ correct_answer.fields.number.integerValue }}</div>
    </div>
    <br>
    <div class="answers" v-for="answer in sorted_answers" :key="answer.name">
      <div>id: {{ answer.fields.id.integerValue }}</div>
      <div>answer_num: {{ answer.fields.number.integerValue }}</div>
    </div>

    <button @click="sort(); grade()">採点する</button>
    <h2>あなたの点数は {{correct_num}} / {{correct_answers.length}} です</h2>

    <div class="next-button">
      <router-link to="/">
      <button class="answer-submit">はじめに戻る</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      correct_answers: [],
      answers: [],
      sorted_correct_answers: [],
      sorted_answers: [],
      correct_num: 0,
    }
  },
  created() {
    axios.get(
      "https://firestore.googleapis.com/v1/projects/wedding-quiz-ac222/databases/(default)/documents/correct_answers"
    )
    .then(response => {
      this.correct_answers = response.data.documents
    }),
    axios.get(
      "https://firestore.googleapis.com/v1/projects/wedding-quiz-ac222/databases/(default)/documents/answers"
    )
    .then(response => {
      this.answers = response.data.documents
    })
  },
  methods: {
    sort() {
      for (let i = 1; i < this.correct_answers.length+1; i++) {
        for (let j = 0; j < this.correct_answers.length; j++) {
          // correct_answersの整序
          if (this.correct_answers[j].fields.id.integerValue == i) {
            this.sorted_correct_answers.push(this.correct_answers[j])
          }
          // answersの整序
          if (this.answers[j].fields.id.integerValue == i) {
            this.sorted_answers.push(this.answers[j])
          }
        }
      }
      console.log(this.sorted_correct_answers)
    },
    grade() {
      for (let k = 0; k < this.sorted_correct_answers.length; k++) {
        if (this.sorted_correct_answers[k].fields.number.integerValue == this.sorted_answers[k].fields.number.integerValue) {
          this.correct_num += 1
        }
      }
      console.log(this.sorted_correct_answers)
    },
  }

}

</script>


<style scoped>
</style>
