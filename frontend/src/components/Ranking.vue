<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>ランキング</h1>
        <h2>🥇1位 {{username_array[0]}} さん：{{score_array[0]}}点</h2>
        <h2>🥈2位 {{username_array[1]}} さん：{{score_array[1]}}点</h2>
        <h2>🥉3位 {{username_array[2]}} さん：{{score_array[2]}}点</h2>
      </div>
    </div>


  </div>
</template>


<script>
import firebase from '../firebase'

export default {
  data() {
    return {
      db: null,
      collection: null,
      score_array: [],
      username_array: [],
    }
  },
  created() {
    this.db = firebase.firestore();
    this.collection = this.db.collection('scores');
    this.getScores();
  },
  methods: {
    getScores() {
      this.collection
      .orderBy('score', 'desc').limit(3).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data().score);
          console.log(doc.data().username);
          this.score_array.push(doc.data().score);
          this.username_array.push(doc.data().username);
        })
      })
    },
  },


}

</script>


<style scoped>
</style>
