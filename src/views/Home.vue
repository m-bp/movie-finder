<template>
  <div class="home">
    <div
      v-if="error"
      class="error"
    >
      {{ error }}
    </div>
    <form @submit.prevent="search()">
      <input
        v-model="query"
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
  </div>
</template>

<script>
import movieService from '@/services/movieService';

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      query: '',
      error: '',
    }
  },
  methods: {
    search () {
      movieService.search(this.query).then((data) => {
        console.log(data);

        if (data.Response === "True") {
          this.$store.commit('setQuery', this.query);
          this.$store.commit('setResults', data.Search);
          this.$router.push({ name: 'Results' })
        }
        else {
          this.error = data.Error;
        }
      })

      this.query = '';
    }
  }
}
</script>
