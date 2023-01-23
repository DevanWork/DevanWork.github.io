<template>
  <div>
    <b-nav vertical class="beep">
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item>Disabled</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style>
.beep {
  background-color: goldenrod;
  max-width: 10vw;
  min-height: 100vh;

}
</style>
