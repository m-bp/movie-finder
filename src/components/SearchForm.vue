<template>
  <form @submit.prevent="onSubmit()">
    <input
      :value="query"
      @input="updateQuery"
      placeholder="Search..."
      type="text"
      autofocus
    >
    <input
      type="submit"
      value="Search"
      :disabled="!query"
    >
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return { query: '' }
  },
  props: {
  },
  methods: {
    updateQuery (event) {
      this.query = event.target.value;
      this.$emit('input', this.query)
    },
    onSubmit () {
      this.$emit('submit')
    }
  }
};
</script>

<style scoped></style>
