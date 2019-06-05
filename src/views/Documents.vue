<template>
  <div>
    <Hero :pageTitle="pageTitle"/>
    <div class="documents container" v-if="documents">
      <ul>
        <li v-for="(doc, index) in filteredDocuments[0]" :key="doc[index]">
          <a :href="doc.url">{{ doc.fileName }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  name: 'Documents',
  components: {
    Hero,
  },
  props: [
    'documents'
  ],
  data() {
    return {
      pageTitle: 'Documents',
    }
  },
  computed: {
    filteredDocuments() {
      return this.documents.edges.map((document) => {
        return document.node.document;
      });
    },
  },
}
</script>

<style>
  .documents {
    min-height: 500px;
  }
</style>
