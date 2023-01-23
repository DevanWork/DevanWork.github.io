<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand @click="setPage('About')">Pokemon Calculator</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <!-- <b-nav-item @click="setPage('Single')">Single Types</b-nav-item>
        <b-nav-item @click="setPage('Dual')">Dual Types</b-nav-item>
        <b-nav-item @click="setPage('Tera')">Tera Types</b-nav-item>
        <b-nav-item @click="setPage('About')">About</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
<!-- 
    <AboutPage v-if="getPage() === 'About'" />
    <SingleTypes v-if="getPage() === 'Single'" />
    <DualTypes v-if="getPage() === 'Dual'" />
    <TeraTypes v-if="getPage() === 'Tera'" /> -->

  </div>
</template>

<script>
// import AboutPage from '@/components/AboutPage.vue'
// import SingleTypes from '@/components/types/SingleTypes.vue'
// import DualTypes from '@/components/types/DualTypes.vue'
// import TeraTypes from '@/components/types/TeraTypes.vue'

export default {
  name: "NavBar",
  data() {
    return {
      
    };
  },
  components: {
    // AboutPage,
    // SingleTypes,
    // DualTypes,
    // TeraTypes
  },
  methods: {
    setPage(x) {
        this.$store.commit('setPage', x);
    },
    getPage() {
        return this.$store.state.navbar.page;
    },
  },
};
</script>

<style>
</style>
