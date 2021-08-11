<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>ランキング</h1>
        <div v-for="(username, i) in username_array" :key="username">
          <h2>
            <span v-if="i+1==1">🥇</span>
            <span v-if="i+1==2">🥈</span>
            <span v-if="i+1==3">🥉</span>
          {{i+1}}位 {{username_array[i]}} さん：{{score_array[i]}}点</h2>
        </div>
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
      .orderBy('score', 'desc').get()
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
