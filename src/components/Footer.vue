<template>
  <footer v-if="contactInfo">
    <div class="footer__inner container">
      <ul>
        <li v-for="(management, index) in filteredContactInfoOne[0]" :key="index">
          {{ management }}
        </li>
        <li>
          <a href="https://www.capmanagement.com">www.capmangement.com</a>
        </li>
      </ul>
      <ul>
        <li v-for="(management, index) in filteredContactInfoTwo[0]" :key="index">
          {{ management }}
        </li>
        <li>
          <a href="mailto:aaron@capmanagement.com">aaron@capmanagement.com</a>
        </li>
      </ul>
      <ul>
        <li v-for="(management, index) in filteredContactInfoThree[0]" :key="index">
          {{ management }}
        </li>
      </ul>
      <ul>
        <li>
          Helpful Links:
        </li>
        <li>
            <a href="https://www.capmanagement.com/ach">ACH Setup</a>
        </li>
        <li>
            <a href="https://www.capmanagement.com/blog">CAP Blog</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['contactInfo'],
  computed: {
    filteredContactInfoOne() {
      return this.contactInfo.edges.map((management) => {
        return management.node.one;
      });
    },
    filteredContactInfoTwo() {
      return this.contactInfo.edges.map((management) => {
        return management.node.two;
      });
    },
    filteredContactInfoThree() {
      return this.contactInfo.edges.map((management) => {
        return management.node.three;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    background: url(../assets/footer-bg.jpg) center center no-repeat;
    background-size: cover;
    border-top: 5px solid #000;
    color: #fff;
    margin-top: 1em;

    ul {
      display: flex;
      flex-direction: column;
      width: 33.333333%;

      li {

        &:first-child {
          font-weight: bold;
        }

        a {
          color: #f4f1bb;
          text-decoration: none;
        }
      }
    }
  }

  .footer__inner {
    display: flex;
    justify-content: space-between;
  }
</style>
