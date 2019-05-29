<template>
  <div class="container welcome-wrapper">
    <div v-for="edge in $static.allWelcomeMessage.edges" :key="edge.node.id">
      <div v-html="edge.node.welcome"></div>
    </div>
    <g-image src="~/img/stock.jpg"></g-image>
  </div>
</template>

<static-query>
  query {
    allWelcomeMessage {
      edges {
        node {
          id
          welcome
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: 'Welcome'
};
</script>

<style>
.welcome-wrapper {
  display: flex;
  align-items: center;
}
</style>
