<template>
  <router-view :key="key" />
</template>
<script>
export default {
  name: 'Empty',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

