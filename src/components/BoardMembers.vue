<template>
  <div class="board-members">
    <h3>Board Members</h3>
    <div v-if="content">
      <ul v-for="(member) in content.edges" :key="member.node.id">
        <li>President - {{ member.node.president }}</li>
        <li>Vice President - {{ member.node.vicePresident }}</li>
        <li>Secretary - {{ member.node.secretary }}</li>
        <li>Treasurer - {{ member.node.treasurer }}</li>
        <li>Member-At-Large - {{ member.node.memberAtLarge }}</li>
        <span>{{member.node.id}}</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board-Members',
  props: ['content']
}
</script>
