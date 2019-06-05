<template>
  <div class="staff staff__wrapper">
    <h3>Staff</h3>
    <div v-if="staff">
      <ul>
        <li v-for="(member, index) in staff.edges" :key="member.node.id">{{ member.node.staff[index] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Staff',
  props: ['staff']
}
</script>
