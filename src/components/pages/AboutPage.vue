<template>
  <div class="page">
    <b-card no-body class="cardPage">
      <b-card-body class="about-header">
        <h1>About</h1>
      </b-card-body>

      <b-card-body class="about-body">
        <b-card-text class="about-subheader">Devan Chaney</b-card-text>
        <img
          src="@/assets/about/gremlinhotdog.gif"
          alt="hot doggie"
          class="about-padding"
        />

        <b-card-text class="about-info">
          
        </b-card-text>
      </b-card-body>

      <b-card-footer class="about-footer">
        Copyright © 2023 DEVAN CHANEY, All rights reserved.
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.cardPage {
  max-width: 100vw;
  min-height: 100vh;
  height: 100vh;
}

.about-header {
  text-align: center;
  background-color: #3ab67b;
  color: white;
  min-height: 10vh;
  max-height: 10vh;
}

.about-body {
  background-color: #cbffe6;
  overflow-y: auto;
  text-align: center;
}

.about-footer {
  text-align: center;
  background-color: #3ab67b;
  color: white;
}

.about-subheader {
  font-size: 48px;
}

.about-padding {
  margin-bottom: 5vh;
}
</style>