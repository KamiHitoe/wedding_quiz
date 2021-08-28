<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>結果発表</h1>
      </div>
    </div>

    <button class="answer-submit" id="grade-button" @click="postScore">採点する</button>

    <div class="disappear" id="target">
      <h2>{{this.$store.state.username}}さんの点数は<br>{{correct_num}} / {{correct_answers.length}} です</h2>
      <router-link to="/ranking">
      <button class="answer-submit">ランキング<br>を見る</button>
      </router-link>
    </div>
  </div>

</template>


<script>
import firebase from '../firebase'

export default {
  data() {
    return {
      correct_num: 0,
      correct_answers: [],
      db: null,
      correct_answers_collection: null,
      answers_collection: null,
      scores_collection: null,
    }
  },
  // 初期処理
  created() {
    this.db = firebase.firestore();
    // firebaseコレクションと変数の紐づけ
    this.answers_collection = this.db.collection('answers');
    this.scores_collection = this.db.collection('scores');
    this.correct_answers_collection = this.db.collection('correct_answers');
  },
  methods: {
    postScore() {
      // firestoreから正答をcorrect_answersに格納
      this.correct_answers_collection
      // idを昇順にSELECT
      .orderBy('id').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.correct_answers.push(doc.data().number);
        })
      })
      // promissによって同期処理
      .then(() => {
        this.answers_collection.add({
          answerArray: this.$store.state.answerArray,
          username: this.$store.state.username,
        })
      })
      // promissによって同期処理
      .then(() => {
        this.correct_num = 0;
        for (let i=0; i < this.correct_answers.length; i++) {
          if (this.$store.state.answerArray[i] == this.correct_answers[i]) {
            this.correct_num += 1;
          }
        }
        // console.log(this.correct_num);
      })
      // promissによって同期処理
      .then(() => {
        this.scores_collection.add({
          score: this.correct_num,
          username: this.$store.state.username,
        })
        .then(doc => {
          console.log(doc)
        })
      })
      // scoreが格納されたら採点ボタンを削除して重複登録を防止
      let element = document.getElementById('grade-button');
      element.remove();
      // scoreを登録する前にランキングへ遷移するのを防止
      let target = document.getElementById('target');
      target.className = 'appear';
    },
  },


}

</script>


<style scoped>
.disappear {
  display: none;
}
</style>
