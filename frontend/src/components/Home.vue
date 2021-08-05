<template>
  <div>
    <div class="flex-container">
      <div id="title">
        <h1>Wedding Quiz</h1>
      </div>
    </div>
    <div class="next-button">
      <router-link to="/1">はじめる</router-link>
    </div>
  </div>
</template>

<style>
div {
  text-align: center;
}

.flex-container {
  display: flex;
}

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
