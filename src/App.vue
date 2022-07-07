<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import DragVerifyImgChip from "./components/DragVerifyImgChip.vue";
import axios from "axios";
const isPassing = false;
let imgsrc = "/src/assets/logo.svg"
let sliderImg = "/src/assets/logo.svg"
const reimg = function (params) {
   console.log("refresh img");
   const axiosData = await axios({ "http://localhost:8080/api/captcha?t=" + new Date() });
   const images = axiosData.data;
   imgsrc = images.b
   sliderImg = images.c
};
const pass = function (params) {
  console.log("verify passing");
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <DragVerifyImgChip
      ref="dragVerify"
      :imgsrc="imgsrc"
      :sliderImg="sliderImg"
      :isPassing.sync="isPassing"
      :showRefresh="true"
      text="请按住滑块拖动"
      successText="验证通过"
      @refresh="reimg"
      @passcallback="pass"
    >
    </DragVerifyImgChip>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
