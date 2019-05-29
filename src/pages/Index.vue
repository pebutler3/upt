<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <Welcome />
    <BoardMembers />
    <Footer />
  </Layout>
</template>
<page-query>
  query {
    allFooter {
      edges {
        node {
          propertyManager{
            value
          }
          management {
            value
          }
          address {
            value
          }
        }
      }
    }
  }
</page-query>
<script>
import axios from 'axios';
import Welcome from '~/components/Welcome.vue';
import BoardMembers from '~/components/BoardMembers.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Welcome,
    BoardMembers,
    Footer,
  },
  metaInfo: {
    title: "Hello, world!"
  },
};
</script>

<style lang="scss">

</style>
