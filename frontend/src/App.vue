<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru');
@import url('https://fonts.googleapis.com/css?family=Poppins');
body {
  font-family: 'Kosugi Maru', serif;
  background-image: url('./assets/watercolor.png');
  text-align: center;
}

.container {
  /* text-align: center; */
}

.quiz-title {
  color: #fff;
  background-color: palevioletred;
  margin: 50px 0px;
  padding: 10px 0px;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
}

.quiz-selection {
  background-color: #F6DCED;
  border: solid 3px palevioletred;
  border-radius: 30%;
  padding: 30px;
  margin: 20px;
}

.quiz-selection li {
  font-weight: bold;
  margin: 20px 0px;
  text-align: left;
}

.answer-form {
  margin-top: 100px;
}

@media (max-width: 600px) {
  .answer-form {
    flex-direction: column;
  }
}

.answer-input {
  display: none;
  clip: rect(1px, 1px, 1px, 1px);
}

.answer-label1 {
  /* border: solid 2px #599159; */
  /* border-radius: 100%; */
  /* transition: all .2s; */
  display: inline-block;
  color: #fff;
  background-color: #82D9A6;
  width: 200px;
  font-size: 50px;
  padding: 50px;
  margin: 30px;
}

.answer-label2 {
  /* border: solid 2px #599159; */
  /* border-radius: 100%; */
  /* transition: all .2s; */
  display: inline-block;
  color: #fff;
  background-color: #D96A62;
  width: 200px;
  font-size: 50px;
  padding: 50px;
  margin: 30px;
}

.answer-label3 {
  /* border: solid 2px #599159; */
  /* border-radius: 100%; */
  /* transition: all .2s; */
  display: inline-block;
  color: #fff;
  background-color: #5C57D9;
  width: 200px;
  font-size: 50px;
  padding: 50px;
  margin: 30px;
}

.answer-input:checked + .answer-label {
  background: #B4DEB4;
  color: #fff;
  text-shadow: 0 0 1px rgba(0,0,0,.7);
}

.answer-input:focus + .answer-label {
  outline-color: #4D90FE;
  outline-offset: -2px;
  outline-style: auto;
  outline-width: 5px;
}

.answer-submit {
  margin: 50px;
  padding: 20px 40px;
  color: #fff;
  background-color: palevioletred;
  border: none;
  border-radius: 10%;
  font-size: 40px;
}

.validate {
  color: #e44f32;
  font-weight: bold;
}

</style>
