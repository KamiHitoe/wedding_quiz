<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>結果発表</h1>
      </div>
    </div>

    <button @click="getDocuments">採点する</button>
    <h2>{{this.$store.state.username}}さんの点数は {{correct_num}} / {{correct_answers.length}} です</h2>

    <div class="next-button">
      <router-link to="/">
      <button class="answer-submit">はじめに戻る</button>
      </router-link>
    </div>
  </div>

</template>


<script>
import firebase from '../firebase'

export default {
  data() {
    return {
      correct_answers: [2, 1],
      answers: [],
      correct_num: 0,
      db: null,
      answers_collection: null,
      scores_collection: null,
    }
  },
  created() {
    this.db = firebase.firestore();
    this.answers_collection = this.db.collection('answers');
    this.scores_collection = this.db.collection('scores');
  },
  methods: {
    getDocuments() {
      this.answers_collection.where('username', '==', this.$store.state.username)
      .orderBy('id').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data().id);
          console.log(doc.data().number);
          console.log(doc.data().username);
          // this.answers.push(doc.data().number);
          let parse_number = parseInt(JSON.parse(JSON.stringify(doc.data().number))); 
          this.answers.push(parse_number);
        })
      })
      .then(() => {
        this.correct_num = 0;
        for (let i=0; i < this.correct_answers.length; i++) {
          if (this.answers[i] == this.correct_answers[i]) {
            this.correct_num += 1;
          }
        }
        console.log(this.correct_num);
      })
      .then(() => {
        this.scores_collection.add({
          score: this.correct_num,
          username: this.$store.state.username,
        })
        .then(doc => {
          console.log(doc)
        })
      })
    },
  },


}

</script>


<style scoped>
</style>
