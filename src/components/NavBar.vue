<template>
  <div>
    <b-card
      img-src="https://media.discordapp.net/attachments/814022268400828446/1067218483928125510/Logo2.png?width=676&height=676"
      img-alt="Logo"
      img-top
      tag="article"
      style="width:250px;height250px;"
      class="beep"
    >
      <b-card-text>
        <b-nav vertical>
          <div class="button-container-2">
            <span class="mas">Home</span>
            <button type="button" name="Hover">Home</button>
          </div>
          <div class="button-container-2">
            <span class="mas">About Me</span>
            <button type="button" name="Hover">About Me</button>
          </div>
          <div class="button-container-2">
            <span class="mas">Portfolio</span>
            <button type="button" name="Hover">Portfolio</button>
          </div>
          <div class="button-container-2">
            <span class="mas">Resumé</span>
            <button type="button" name="Hover">Resumé</button>
          </div>
          <div class="button-container-2">
            <span class="mas">BSU</span>
            <button type="button" name="Hover">BSU</button>
          </div>
        </b-nav>
      </b-card-text>
    </b-card>
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

<style lang="scss">
.beep {
  background-color: #CBFFE6;
  //max-width: 10vw;
  min-height: 100vh;
}

div {
  break-after: avoid;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400");
@import url("https://fonts.googleapis.com/css?family=Roboto:100");

@mixin button($bcolor, $url, $x1, $y1, $bor, $col) {
  background: $bcolor;
  -webkit-mask: url($url);
  mask: url($url);
  -webkit-mask-size: $x1 $y1;
  mask-size: $x1 $y1;
  border: $bor;
  color: $col;
}

.header {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  margin-top: 12vh;
}

.footer {
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-top: 15vh;
}

.button-container-2 {
  position: relative;
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7vh;
  overflow: hidden;
  border: 1px solid #CBFFE6; //border of the button
  font-family: "Lato", sans-serif;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;

  button {
    width: 101%;
    height: 100%;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 11px;
    letter-spacing: 1px;
    font-weight: bold;

    @include button(
      #3AB67B, //button color before hover
      "https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png",
      3000%,
      100%,
      none,
      #CBFFE6 //button color after hover
    );
    cursor: pointer;
    -webkit-animation: ani2 0.7s steps(29) forwards;
    animation: ani2 0.7s steps(29) forwards;

    &:hover {
      -webkit-animation: ani 0.7s steps(29) forwards;
      animation: ani 0.7s steps(29) forwards;
    }
  }
}

.mas {
  position: absolute;
  color: black; //word as you hover
  text-align: center;
  width: 101%;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  position: absolute;
  font-size: 11px;
  margin-top: 17px;
  overflow: hidden;
  font-weight: bold;
}

@-webkit-keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@-webkit-keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

@keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}
</style>
