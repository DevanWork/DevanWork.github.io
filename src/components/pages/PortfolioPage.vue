<template>
  <div class="page">
    <b-card no-body class="cardPage">
      <b-card-body class="portfolio-header">
        <h1>Portfolio</h1>
      </b-card-body>
        <b-card-body class="portfolio-body">
          <b-card-title>Background Design</b-card-title>
          <b-card-text>
            <img src="@/assets/portfolio/background_design_master/1_18_2023_background_studies_2.png" alt="Image" class="standardImage" />
            <img src="@/assets/portfolio/background_design_master/1_18_2023_background_study.png" alt="Image" class="standardImage" />
            <img src="@/assets/portfolio/background_design_master/1-4-2023_1_background_studies.png" alt="Image" class="standardImage" />
          </b-card-text>

          <b-card-title>Gesture Drawing</b-card-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>

          <b-card-title>Original Character Illustrations</b-card-title>
          <b-card-sub-title class="mb-2">Aila</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>
          <b-card-sub-title class="mb-2">Claude</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>
          <b-card-sub-title class="mb-2">Extras</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>

          <b-card-title>Mockups</b-card-title>
          <img src="@/assets/logo.png" alt="Image" />
          <b-card-sub-title class="mb-2">Tarot Deck</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>

          <b-card-title>Sketch A Day</b-card-title>
          <b-card-sub-title class="mb-2">Jan 2022</b-card-sub-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>

          <b-card-title>Misc.</b-card-title>
          <b-card-text>
            <img src="@/assets/logo.png" alt="Image" />
            <img src="@/assets/logo.png" alt="Image" />
          </b-card-text>
        </b-card-body>

      <b-card-footer class="portfolio-footer">
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
  min-height: 10vh;
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

.standardImage {
    width: 20vw;
    height: 20vh;
    padding-right: 1vw;
}
</style>