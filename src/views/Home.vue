<template>
  <div>
    <Hero :showLogo="true"/>
    <main>
      <Welcome :welcomeMessage="welcomeMessage" :welcomeImage="welcomeImage" />
      <div class="board-staff board-staff__wrapper container">
        <BoardMembers :content="content" />
        <Staff :staff="staff" />
      </div>
    </main>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Welcome from '../components/Welcome.vue';
import BoardMembers from '../components/BoardMembers.vue';
import Staff from '../components/Staff.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Welcome,
    BoardMembers,
    Staff,
  },
  props: [
    'welcomeMessage',
    'welcomeImage',
    'content',
    'staff',
    'contactInfo',
  ],
}
</script>

<style>

</style>
