<template>
  <div
    v-if="error"
    class="error"
  >
    {{ error }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    error: String,
  },
};
</script>

<style lang="scss">
.error {
  position: fixed;
  bottom: 2em;
  color: $color-red;
  font-size: 2em;
}
</style>
