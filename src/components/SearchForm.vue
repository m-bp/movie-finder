<template>
  <div class="search-form-wrapper">
    <form
      @submit.prevent="onSubmit()"
      class="search-form"
    >
      <input
        :value="query"
        @input="updateQuery"
        placeholder="Search for a movie..."
        type="text"
        autofocus
        class="search-form__input"
      >
      <input
        type="submit"
        value="Search"
        :disabled="!query"
        class="search-form__submit"
      >
    </form>
  </div>
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

<style lang="scss">
.search-form {
  display: flex;
  max-width: 600px;
  height: 2.5em;
  margin: auto;
  font-size: 1.5em;
  line-height: 2;
  border: 1px solid #ccc;
  border-radius: 3em;
  background: white;
  overflow: hidden;

  &__input {
    padding: 0 1em;
    border: none;
    height: 100%;
    flex: 1;

    &:focus {
      outline: none;
    }
  }

  &__submit {
    height: 100%;
    margin: 0;
    padding: 0 1em;
    border: none;
    border-left: 1px solid #ccc;
    color: $color-black;
    background-color: $color-yellow;

    &:focus,
    &:hover {
      outline: none;
      background-color: $color-dark-yellow;
    }
  }
}

.search-form-wrapper {
  flex: 1;
  padding: 2em;
  background: black;
}
</style>
