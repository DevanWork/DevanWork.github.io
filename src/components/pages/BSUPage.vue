<template>
  <div class="page">
    <b-card no-body class="cardPage">
      <b-card-body class="bsu-header">
        <h1>BSU</h1>
      </b-card-body>

      <b-card-body class="bsu-body">
        <b-card-text class="bsu-subheader">Various Projects from Boise State University</b-card-text>
        <b-card-text>Please right click on an image and select "open image in new tab" to see each image in the best resolution.</b-card-text>
        
        <!-- This is youtube video links carousel -->
        <b-card-sub-title>G.I.M.M. Projects?</b-card-sub-title>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="10000"
          class="bsu-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <a href="https://www.youtube.com/watch?v=nxkmmXZ-4z0">
          <b-carousel-slide
            img-src="@/assets/bsu/arApp.png"
            class="carousel-img"
          ></b-carousel-slide></a>

          <a href="https://www.youtube.com/watch?v=IUTlF8kUFsY">
          <b-carousel-slide
            img-src="@/assets/bsu/roughAnimatic.png"
            class="carousel-img"
          ></b-carousel-slide></a>

          <a href="https://www.youtube.com/watch?v=0JiPdCyaehU">
          <b-carousel-slide
            img-src="@/assets/bsu/sheepHerderTrailer.png"
            class="carousel-img"
          ></b-carousel-slide></a>

          <a href="https://www.youtube.com/watch?v=zj659Iw9eHw">
          <b-carousel-slide
            img-src="@/assets/bsu/videoDirection.png"
            class="carousel-img"
          ></b-carousel-slide></a>

          <a href="https://www.youtube.com/watch?v=2GUczkY_Urw">
          <b-carousel-slide
            img-src="@/assets/bsu/backgroundDesign.png"
            class="carousel-img"
          ></b-carousel-slide></a>

        </b-carousel><br><br>

        <b-card-sub-title>Animation Principles</b-card-sub-title>
        <b-carousel
          id="carousel-2"
          v-model="slide"
          :interval="10000"
          class="bsu-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="@/assets/bsu/BouncingBall.gif"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/bsu/TyrannyAnimation.gif"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/bsu/ezgif.com-gif-maker.gif"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/bsu/BouncingBall (1).gif"
            class="carousel-img"
          ></b-carousel-slide>

        </b-carousel><br><br>

        <b-card-sub-title>College of Innovation and Design Concepts/Projects</b-card-sub-title>
        <b-carousel
          id="carousel-design"
          v-model="slide"
          :interval="10000"
          class="bsu-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="@/assets/bsu/design_concepts/COID331_Project_1_Logo.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/bsu/design_concepts/DragonFoodBanner.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/bsu/design_concepts/MailChimp.png"
            class="carousel-img"
          ></b-carousel-slide>

        </b-carousel><br><br>

        <b-card-sub-title>App concepts</b-card-sub-title>
        <b-carousel
          id="carousel-concepts"
          v-model="slide"
          :interval="10000"
          class="bsu-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="@/assets/bsu/app_concepts/ImpactProjectSketches_DevanC.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/bsu/app_concepts/Prototype1.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/bsu/app_concepts/unknown (1).png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/bsu/app_concepts/unknown.png"
            class="carousel-img"
          ></b-carousel-slide>

        </b-carousel>

        <b-card-text class="bsu-info">
          
        </b-card-text>
      </b-card-body>

      <b-card-footer class="bsu-footer">
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

.bsu-header {
  text-align: center;
  background-color: #3ab67b;
  color: white;
  min-height: 10vh;
  max-height: 10vh;
}

.bsu-body {
  background-color: #cbffe6;
  overflow-y: auto;
  text-align: center;
}

.bsu-footer {
  text-align: center;
  background-color: #3ab67b;
  color: white;
}

.bsu-subheader {
  font-size: 48px;
}

.bsu-padding {
  margin-bottom: 5vh;
}

.bsu-carousel {
    max-width: 70vw;
    margin: auto;
}

.carousel-img {
    max-height: 65vh;
    overflow-y: auto;
}
</style>