<template>
  <div>
    <b-nav vertical class="beep">
    <img src="https://media.discordapp.net/attachments/814022268400828446/1067218483928125510/Logo2.png?width=676&height=676" alt="Logo" style="width:250px;height250px;">
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
