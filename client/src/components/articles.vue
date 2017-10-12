<template>
  <div class="">
    <ul v-for='results in result'>
      <li>{{results}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['result']
}
</script>

<style lang="css">
</style>
