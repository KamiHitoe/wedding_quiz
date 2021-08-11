<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>結果発表</h1>
      </div>
    </div>

    <button id="grade-button" @click="postScore">採点する</button>
    <h2>{{this.$store.state.username}}さんの点数は {{correct_num}} / {{correct_answers.length}} です</h2>

    <div class="next-button">
      <router-link to="/ranking">
      <button class="answer-submit">ランキングを見る</button>
      </router-link>
    </div>
  </div>

</template>


<script>
import firebase from '../firebase'

export default {
  data() {
    return {
      correct_answers: [2, 1, 2, 3, 3, 2, 1, 3, 2, 3],
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
    postScore() {
      // this.answers_collection.where('username', '==', this.$store.state.username)
      // .orderBy('id').get()
      // .then(snapshot => {
      //   snapshot.forEach(doc => {
      //     console.log(doc.data().id);
      //     console.log(doc.data().number);
      //     console.log(doc.data().username);
      //     let parse_number = parseInt(JSON.parse(JSON.stringify(doc.data().number))); 
      //     this.answers.push(parse_number);
      //   })
      // })
      this.answers_collection.add({
        answerArray: this.$store.state.answerArray,
        username: this.$store.state.username,
      })
      .then(() => {
        this.correct_num = 0;
        for (let i=0; i < this.correct_answers.length; i++) {
          if (this.$store.state.answerArray[i] == this.correct_answers[i]) {
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
      let element = document.getElementById('grade-button');
      element.remove();
    },
  },


}

</script>


<style scoped>
</style>
