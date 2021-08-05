<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>結果発表</h1>
      </div>
    </div>
    <div class="correct_answers" v-for="correct_answer in correct_answers" :key="correct_answer.name">
      <div>id: {{ correct_answer.fields.id.integerValue }}</div>
      <div>correct_answer_num: {{ correct_answer.fields.number.integerValue }}</div>
    </div>
    <br>
    <div class="answers" v-for="answer in answers" :key="answer.name">
      <div>id: {{ answer.fields.id.integerValue }}</div>
      <div>answer_num: {{ answer.fields.number.integerValue }}</div>
    </div>

    <div class="next-button">
      <router-link to="/">はじめに戻る</router-link>
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
}

</script>


<style scoped>



</style>
