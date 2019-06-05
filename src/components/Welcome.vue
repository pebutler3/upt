<template>
  <div class="welcome welcome__wrapper container" v-if="welcomeMessage">
    <div class="welcome__content" v-for="message in welcomeMessage.edges" :key="message.node.id" v-html="message.node.message.html" />
    <div v-if="welcomeImage" class="welcome-image__wrapper">
      <img v-for="img in welcomeImage.edges" :key="img.node.id" class="welcome-image__img" :src="img.node.image.url" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: ['welcomeMessage', 'welcomeImage'],
}
</script>

<style lang="scss">
  .welcome {

    div {
      flex: 1;
    }

    &__wrapper {
      display: flex;
      align-items: center;
    }
  }
  .welcome-image {

    &__wrapper {
      display: flex;
    }

    &__img {
      height: 400px;
      width: 400px;
      margin-left: auto;
    }
  }
</style>

