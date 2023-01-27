<template>
  <div class="page">
    <b-card no-body class="cardPage">
      <b-card-body class="resume-header">
        <h1>Resume</h1>
      </b-card-body>

      <b-card-body class="resume-body">
        <b-card-text class="resume-subheader"
          >Resume and Certificaitons</b-card-text
        >
        <b-card-text>Please right click on an image and select "open image in new tab" to see each image in the best resolution.</b-card-text>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="10000"
          class="resume-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            img-src="@/assets/resume/resume.png"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/resume/1.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/resume/Badges.png"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/resume/CourseCert.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/resume/CoverLetters.png"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/resume/Interview.png"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/resume/ResumeStrats.png"
            class="carousel-img"
          ></b-carousel-slide>

        </b-carousel>

        <br /><br />
      </b-card-body>

      <b-card-footer class="resume-footer">
        Copyright © 2023 DEVAN CHANEY, All rights reserved.
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cardPage {
  max-width: 100vw;
  min-height: 100vh;
  height: 100vh;
}

.resume-header {
  text-align: center;
  background-color: #3ab67b;
  color: white;
  min-height: 10vh;
  max-height: 10vh;
}

.resume-body {
  background-color: #cbffe6;
  overflow-y: auto;
  text-align: center;
}

.resume-footer {
  text-align: center;
  background-color: #3ab67b;
  color: white;
}

.resume-info {
  font-size: 20px;
}

.resume-subheader {
  font-size: 48px;
}

.resume-padding {
  margin-bottom: 5vh;
}

.resume-carousel {
    max-width: 70vw;
    margin: auto;
}

.carousel-img {
    max-height: 65vh;
    overflow-y: auto;
}
</style>