<template>
  <div>
    <!-- <div class="flex-container"> -->
      <div id="title">
        <h1>👑Ranking👑</h1>
      </div>
      <div v-for="(userArray, i) in reMapping" :key=userArray>
        <div v-if="i+1==1">
          <div v-for="user in userArray" :key=user>
            <div id="border1" v-if="user">
              <h2 id="rank1"><span id="rank1-grade">🥇{{i+1}}位 </span>{{user}} さん<br><span class="score">{{scoreArray[i]}}点</span></h2>
            </div>
          </div>
        </div>
        <div v-else-if="i+1==2">
          <div v-for="user in userArray" :key=user>
            <div id="border2" v-if="user">
              <h2 id="rank2"><span id="rank2-grade">🥈{{i+1}}位 </span>{{user}} さん<br><span class="score">{{scoreArray[i]}}点</span></h2>
            </div>
          </div>
        </div>
        <div v-else-if="i+1==3">
          <div v-for="user in userArray" :key=user>
            <div id="border3" v-if="user">
              <h2 id="rank3"><span id="rank3-grade">🥉{{i+1}}位 </span>{{user}} さん<br><span class="score">{{scoreArray[i]}}点</span></h2>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-for="user in userArray" :key=user>
            <div v-if="user">
              <h2>{{i+1}}位 {{user}} さん：{{scoreArray[i]}}点</h2>
            </div>
          </div>
        </div>
        
      </div>
    <!-- </div> -->


  </div>
</template>


<script>
import firebase from '../firebase'

export default {
  data() {
    return {
      db: null,
      collection: null,
      scoreArray: [],
      usernameArray: [],
      reMapping: [],
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
          this.scoreArray.push(doc.data().score);
          this.usernameArray.push(doc.data().username);
        })
      })
      .then(() => {
        let tempScore = this.scoreArray[0];
        let tempArray = [];
        for (let i=0; i < this.scoreArray.length; i++) {
          if (tempScore == this.scoreArray[i]) {
            tempArray.push(this.usernameArray[i]);
          } else {
            this.reMapping.push(tempArray);
            while (i>=0) {
              if (this.reMapping.length != i) {
                this.reMapping.push([]);
              } else {
                break
              }
            }
            tempScore = this.scoreArray[i];
            tempArray = [];
            tempArray.push(this.usernameArray[i]);
          }
          if (i == this.scoreArray.length - 1) {
            this.reMapping.push(tempArray);
          }
        }
      })
      console.log('reMap');
      console.log(this.reMapping);
      console.log(this.scoreArray);
    },
  },


}

</script>


<style scoped>
#title h1 {
  font-family: 'Poppins', serif;
  margin: 60px;
  color: #f32a2e;
  font-size: 35px;
}

.score {
  color: #f55e61;
  padding: 5px;
}

#rank1 {
  font-size: 30px;
  color: #000;
  padding: 5px;
}

#border1 {
  width: 350px;
  background-color: #fffe41;
  margin: 0 auto;
}

#rank1-grade {
  color: goldenrod;
  /* background-color: yellow; */
}

#rank2 {
  font-size: 30px;
  color: #000;
  padding: 5px;
}

#border2 {
  width: 350px;
  background-color: #dfe8ed;
  margin: 0 auto;
}

#rank2-grade {
  color: #55667a;
  /* background-color: yellow; */
}

#rank3 {
  font-size: 30px;
  color: #000;
  padding: 5px;
}

#border3 {
  width: 350px;
  background-color: #e9c9aa;
  margin: 0 auto;
}

#rank3-grade {
  color: #763d28;
  /* background-color: yellow; */
}



</style>
