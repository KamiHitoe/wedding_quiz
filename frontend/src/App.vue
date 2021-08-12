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
  flex-direction: column;
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
  /* border-radius: 100%; */
  /* transition: all .2s; */
  border: solid 2px #4CAF50;
  display: block;
  color: #000;
  background-color: #fff;
  width: 200px;
  font-size: 50px;
  padding: 50px;
  margin: 30px auto;
}

.answer-label2 {
  /* border-radius: 100%; */
  /* transition: all .2s; */
  border: solid 2px #008CBA;
  display: block;
  color: #000;
  background-color: #fff;
  width: 200px;
  font-size: 50px;
  padding: 50px;
  margin: 30px auto;
}

.answer-label3 {
  /* border-radius: 100%; */
  /* transition: all .2s; */
  border: solid 2px #f44336;
  display: block;
  color: #000;
  background-color: #fff;
  width: 200px;
  font-size: 50px;
  padding: 50px;
  margin: 30px auto;
}

.answer-input:checked + .answer-label1 {
  background: #4CAF50;
  color: #fff;
  text-shadow: 0 0 1px rgba(0,0,0,.7);
}

.answer-input:checked + .answer-label2 {
  background: #008CBA;
  color: #fff;
  text-shadow: 0 0 1px rgba(0,0,0,.7);
}

.answer-input:checked + .answer-label3 {
  background: #f44336;
  color: #fff;
  text-shadow: 0 0 1px rgba(0,0,0,.7);
}

/* .answer-input:focus + .answer-label {
  outline-color: #4D90FE;
  outline-offset: -2px;
  outline-style: auto;
  outline-width: 5px;
} */

.answer-submit {
  margin: 50px;
  padding: 20px 40px;
  color: #fff;
  background-color: #f55e61;
  border: none;
  border-radius: 100vh;
  font-size: 30px;
}

.validate {
  color: #e44f32;
  font-weight: bold;
}

</style>
