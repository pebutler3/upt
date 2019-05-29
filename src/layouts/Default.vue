<template>
  <div>
    <Panel />
    <header class="header">
      <nav class="container">
        <g-link to="/">Home</g-link>
        <g-link to="/documents">Documents</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
  import Panel from '../components/Panel.vue';

  export default {
    components: {
      Panel,
    }
  }
</script>


<style lang="scss">
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin:0;
    padding:0;
    line-height: 1.5;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  header {
    background-color: #3d315b;
  }

  .panel {
    background-color: #31264c;
    color: #fff;
    padding: 1.25rem;
  }

  a {
    color: #008cba;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
