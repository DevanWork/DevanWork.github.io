<template>
  <div class="page">
    <b-card no-body class="cardPage">
      <b-card-body class="portfolio-header">
        <h1>Portfolio</h1>
      </b-card-body>
      <b-card-body class="portfolio-body">
      <b-card-text style="text-align:center;">Please right click on an image and select "open image in new tab" to see each image in the best resolution.</b-card-text>
      <!-- Background Design -->
        <b-card-title>Background Design</b-card-title>
        <b-carousel
          id="carousel-backgroundDesign"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Background Design -->
          <b-carousel-slide
            img-src="@/assets/portfolio/background_design_master/1_18_2023_background_studies_2.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/background_design_master/1_18_2023_background_study.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/background_design_master/1-4-2023_1_background_studies.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/background_design_master/1-4-2023_background_studies.png"
            class="carousel-img"
          ></b-carousel-slide>
          
        </b-carousel>
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
          <b-carousel
          id="carousel-aila"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Aila -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/aila/Concept.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/aila/Concept2.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/aila/Concept3.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/aila/Concept4.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/aila/Concept5.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/aila/Concept6.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/aila/Concept7.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          
        </b-carousel>
        </b-card-text>
        <b-card-sub-title class="mb-2">Claude</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-claude"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Claude -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/claude/ClaudeHalloween2022.png"
            class="carousel-img"
          ></b-carousel-slide>
        <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/claude/ClaudeMonet.png"
            class="carousel-img"
          ></b-carousel-slide>
        <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/claude/ClaudeRef.png"
            class="carousel-img"
          ></b-carousel-slide>
          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">Edryn</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-edryn"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Edryn -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept2.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept3.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept4.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept5.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept6.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept7.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept8.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept9.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept10.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept11.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept12.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept13.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept14.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept15.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept16.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept17.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept18.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept19.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept20.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept21.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept22.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept23.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept24.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept25.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept26.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept27.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/edryn/Concept28.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">Eva</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-eva"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Eva -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/eva/1.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/eva/2.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/eva/3.png"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">Gale</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-gale"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Gale -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/gale/Concept.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/gale/Concept2.png"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">Morgana</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-morgana"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Morgana -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/morgana/Magellan.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/morgana/Magellan4.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/morgana/MagellanSheet.png"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">MorkBorg</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-mork-borg"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- MorkBorg -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/mork_borg/Elaine.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/mork_borg/Elaine1.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/mork_borg/Elaine2.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/mork_borg/YoteYabolls.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">Tyranny</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-tyrrany"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Tyranny -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Animation.gif"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept2.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept3.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept4.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept5.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept6.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept7.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept8.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept9.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept10.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept11.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept12.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept13.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept14.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept15.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept16.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Concept17.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Expression.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/OC Mashup.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/Origin.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/tyranny/TyrMooyear.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">Vision</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-vision"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Vision -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/vision/Vision.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/vision/Vision1.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">Extras</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-extras"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Extras -->
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/Kya.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/Noah.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/Smithy.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/original_character_illustrations/Ufnar.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>
        

        <!-- Mockups -->
        <b-card-title>Mockups</b-card-title>
        <b-card-sub-title class="mb-2">Tarot Deck</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-tarot-deck"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Tarot Deck -->
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Backing.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardCollection.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardDeath.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardDevil.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardEmperor.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardFool.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardHangedman.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardHermit.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardHierophant.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardHighpriestess.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardJudgement.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardJustice.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardLovers.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardMagician.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardMoon.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardSun.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardTemperance.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/CardTower.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Mockup1.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Mockup2.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Mockup3.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Mockup4.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Mockup5.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Mockup6.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Mockup7.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/Mockup8.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/tarot_deck/PackageFront.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <!-- Extra Mockups -->
        <b-card-sub-title class="mb-2">Extras</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-mockup-extras"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Extras -->
          <b-carousel-slide
            img-src="@/assets/portfolio/mockups/WeaponSkinContestHuntSurvival.jpg"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <!-- Sketch A Day -->
        <b-card-title>Sketch A Day</b-card-title>
        <b-card-sub-title class="mb-2">Jan 2022</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-Jan2022"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Jan 2022 -->
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/1.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/2.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/3.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/4.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/5.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/6.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/7.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/8.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/9.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/10.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/11.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/12.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/13.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/14.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/15.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/16.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/17.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/18.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/19.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/20.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/21.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/22.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/23.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/24.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/25.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/26.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2022/27.png"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
        </b-card-text>

        <b-card-sub-title class="mb-2">Jan 2023</b-card-sub-title>
        <b-card-text>
          <b-carousel
          id="carousel-Jan2023"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Jan 2023 -->
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/1.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/2.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/3.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/4.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/5.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/6.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/7.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/8.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/9.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/10.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/11.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/12.gif"
            class="carousel-img"
          ></b-carousel-slide>

          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/14.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/15.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/16.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/17.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/18.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/sketch_a_day/jan_2023/19.gif"
            class="carousel-img"
          ></b-carousel-slide>
                  

          </b-carousel>
        </b-card-text>

        <!-- Misc. -->
        <b-card-title>Misc.</b-card-title>
        <b-card-text>
          <b-carousel
          id="carousel-misc"
          v-model="slide"
          :interval="10000"
          class="portfolio-carousel"
          controls
          indicators
          background="#cbffe6"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Misc -->
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/@m_n_y_DrawMyOC.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Among Us.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Anxiety.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Caspian.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Critter Deck.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Crow.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/DBH_Noah.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/DndGroup.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Icon.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Icon2.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Illora.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Jammercise.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Laila.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/MatchaSecretSanta2022.png"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/MobPsycho.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/NottBrave.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/Qwynn.jpg"
            class="carousel-img"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="@/assets/portfolio/misc/ShawnOlette.png"
            class="carousel-img"
          ></b-carousel-slide>

          </b-carousel>
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