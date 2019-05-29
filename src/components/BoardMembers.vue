<template>
  <div class="board-members container">
    <h3>Board Members</h3>
    <ul v-for="edge in $static.allBoardMembers.edges" :key="edge.node.id">
      <li>President - {{ edge.node.president }}</li>
      <li>Vice President - {{ edge.node.vicePresident }}</li>
      <li>Secretary - {{ edge.node.secretary }}</li>
      <li>Treasurer - {{ edge.node.treasurer }}</li>
      <li>Member-At-Large - {{ edge.node.memberAtLarge }}</li>
    </ul>
  </div>
</template>

<static-query>
  query {
    allBoardMembers {
      edges {
        node {
          president
          vicePresident
          secretary
          treasurer
          memberAtLarge
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: 'Board-Members',
}
</script>

<style lang="scss">

.board-members {}
</style>
