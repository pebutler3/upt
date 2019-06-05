<template>
  <div class="hero">
    <div v-if="showLogo">
      <a href="index.html">
        <img src="@/assets/logo.svg" alt>
      </a>
      <h1>{{ title }}</h1>
      <h2>{{ subTitle }}</h2>
    </div>
    <h1 v-else>{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: [
    'showLogo',
    'pageTitle'
  ],
  data() {
    return {
      title: 'University Park Tower',
      subTitle: 'Denver, Colorado',
    }
  },
};
</script>

<style lang="scss" scoped>
  .hero {
    background: url(../assets/bg.jpg) center center no-repeat;
    background-size: cover;
    border-bottom: 5px solid #376568;
    color: #fff;
    font-weight: normal;
    text-align: center;
    margin-bottom: 1.25rem;
    padding: 1.25rem;

    h1 {
      margin: 0;
    }

    h1, h2 {
      font-weight: inherit;
    }

    h2 {
      background: #3d315b;
      display: inline-block;
      font-size: .8em;
      padding: .3em .7em;
    }
  }
</style>
