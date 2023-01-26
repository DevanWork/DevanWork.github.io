<template>
  <div class="page">
    <b-card no-body class="cardPage">
      <b-card-body class="portfolio-header">
        <h1>Portfolio</h1>
      </b-card-body>
      <b-card-body class="portfolio-body">
      <!-- Background Design -->
        <b-card-title>Background Design</b-card-title>

        <!-- Gesture Drawings -->
        <b-card-title>Gesture Drawing</b-card-title>
        <b-carousel
          id="carousel-2"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_1_2023_gesture_drawing_1.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_1_2023_gesture_drawings.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_17_2023_gesture_drawings_2.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_17_2023_gesture_drawings_3.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_17_2023_gesture_drawings_4.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_17_2023_gesture_drawings_5.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_24_2023_gesture_drawings_1.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_24_2023_gesture_drawings_2.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_24_2023_gesture_drawings_3.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_24_2023_gesture_drawings_4.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/gesture_drawings_master/1_24_2023_gesture_drawings.png"
            class="carousel-img"
          ></b-carousel-slide>
        </b-carousel>

        <!-- Original Characters -->
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

        <!-- Mockups -->
        <b-card-title>Mockups</b-card-title>
        <img src="@/assets/logo.png" alt="Image" />
        <b-card-sub-title class="mb-2">Tarot Deck</b-card-sub-title>
        <b-card-text>
          <img src="@/assets/logo.png" alt="Image" />
          <img src="@/assets/logo.png" alt="Image" />
        </b-card-text>

        <!-- Sketch A Day -->
        <b-card-title>Sketch A Day</b-card-title>
        <b-card-sub-title class="mb-2">Jan 2022</b-card-sub-title>
        <b-card-text>
          <img src="@/assets/logo.png" alt="Image" />
          <img src="@/assets/logo.png" alt="Image" />
        </b-card-text>

        <!-- Misc. -->
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

.portfolio-carousel {
    max-width: 70vw;
    margin: auto;
}

.carousel-img {
    max-height: 65vh;
    overflow-y: auto;
}
</style>