<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>Wedding Quiz</h1>
      </div>
    </div>
      <label for="name">ユーザネーム：</label>
      <input id="name" type="text" v-model="name">
    <div class="next-button">
      <router-link to="/1">はじめる</router-link>
    </div>
  </div>
</template>

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

</style>
