<template>
  <div class="absolutePosition">
    <b-card
      border-variant="none"
      img-src="https://media.discordapp.net/attachments/814022268400828446/1067218483928125510/Logo2.png?width=676&height=676"
      img-alt="Logo"
      img-top
      tag="article"
      style="width: 13vw; height: 13vh"
      class="navBar"
    >
      <b-nav vertical>
        <div class="button-container-2">
          <span class="mas">Home</span>
          <button type="button" name="Hover" @click="setPage('HomePage')">
            Home
          </button>
        </div>
        <div class="button-container-2">
          <span class="mas">About Me</span>
          <button type="button" name="Hover" @click="setPage('AboutPage')">
            About Me
          </button>
        </div>
        <div class="button-container-2">
          <span class="mas">Portfolio</span>
          <button type="button" name="Hover" @click="setPage('PortfolioPage')">
            Portfolio
          </button>
        </div>
        <div class="button-container-2">
          <span class="mas">Resumé</span>
          <button type="button" name="Hover" @click="setPage('ResumePage')">
            Resumé
          </button>
        </div>
        <div class="button-container-2">
          <span class="mas">BSU</span>
          <button type="button" name="Hover" @click="setPage('BSUPage')">
            BSU
          </button>
        </div>
      </b-nav>
    </b-card>

    <HomePage v-if="getPage() === 'HomePage'" />
    <AboutPage v-if="getPage() === 'AboutPage'" />
    <PortfolioPage v-if="getPage() === 'PortfolioPage'" />
    <ResumePage v-if="getPage() === 'ResumePage'" />
    <BSUPage v-if="getPage() === 'BSUPage'" />
  </div>
</template>

<script>
import HomePage from "@/components/pages/HomePage.vue";
import AboutPage from "@/components/pages/AboutPage.vue";
import PortfolioPage from "@/components/pages/PortfolioPage.vue";
import ResumePage from "@/components/pages/ResumePage.vue";
import BSUPage from "@/components/pages/BSUPage.vue";

export default {
  name: "NavBar",
  data() {
    return {
      
    };
  },
  components: {
    HomePage,
    AboutPage,
    PortfolioPage,
    ResumePage,
    BSUPage,
  },
  methods: {
    setPage(x) {
      this.$store.commit("setPage", x);
    },
    getPage() {
      return this.$store.state.navbar.page;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/styles/draw-button.scss";
.navBar {
  background-color: #cbffe6;
  max-width: 15vw;
  min-height: 100vh;
  position: absolute;
}
.page {
  margin-left: 13vw;
  max-width: 100%;
  min-height: 100vh;
  font-family: 'Lato', sans-serif;
}
</style>
