<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>Wedding Quiz</h1>
      </div>
    </div>
    <div id="username-form">
      <label for="username">ユーザネーム：</label>
      <input id="username" type="text" v-model="username">
    </div>
    <div class="validate" v-if="error">
      <p>{{error}}</p>
    </div>
    <div class="next-button">
      <router-link to="/1">
        <button class="answer-submit" @click="postUserName" v-if="username">はじめる</button>
        <button class="answer-submit" @click="checkForm" v-else>はじめる</button>
      </router-link>
    </div>
  </div>
</template>


<script>
import firebase from '../firebase'

export default {
  data() {
    return {
      username: null,
      error: null,
      db: null,
      collection: null,
    }
  },
  methods: {
    postUserName() {
      this.$store.state.username = this.username;
      this.db = firebase.firestore();
      this.collection = this.db.collection('users');

      this.collection.add({
        username: this.username
      })
      .then(doc => {
        console.log(doc);
      })
    },
    checkForm: function(e) {
      if (this.username) {
        return true;
      }

      if (!this.username) {
        this.error = 'ユーザネームを入力してください';
      }

      e.preventDefault();
    },
  },
  computed: {
    user() {
      return this.$store.state.username
    }
  },
}
</script>


<style scoped>
#title {
  display: table;
  color: #fff;
  background-color: #f55e61;
  width: 500px;
  height: 500px;
  margin-top: 200px;
  vertical-align: middle;
}

#title h1 {
  font-family: 'Poppins', serif;
  display: table-cell;
  vertical-align: middle;
}

#username-form {
  margin-top: 50px;
}

</style>
