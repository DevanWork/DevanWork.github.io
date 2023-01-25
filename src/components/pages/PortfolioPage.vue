<template>
  <div class="page">
    <b-card no-body class="cardPage">
      <b-card-body class="portfolio-header">
        <h1>Portfolio</h1>
      </b-card-body>
        <b-card-body class="portfolio-body">
          <b-card-title>Independent Work</b-card-title>
          <b-card-sub-title class="mb-2">Jan 20 - Jan 22</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>

          <b-card-title>Boise State University</b-card-title>
          <b-card-sub-title class="mb-2">Jan 20 - Jan 22</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>

          <b-card-title>Boise State University</b-card-title>
          <b-card-sub-title class="mb-2">Jan 20 - Jan 22</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>

          <b-card-title>Boise State University</b-card-title>
          <b-card-sub-title class="mb-2">Jan 20 - Jan 22</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>
        </b-card-body>

      <b-card-footer class="portfolio-footer">
        Devan J. Chaney ??SOCIAL MEDIA LINKS??
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang='scss' scoped>
.cardPage {
  max-width: 100vw;
  min-height: 100vh;
  height: 100vh;
}

.portfolio-header {
  text-align: center;
  background-color: #3ab67b;
  color: white;
  max-height: 10vh;
}

.portfolio-body {
  background-color: #cbffe6;
  overflow-y: auto;
}

.portfolio-footer {
  text-align: center;
  background-color: #3ab67b;
  color: white;
}
</style>