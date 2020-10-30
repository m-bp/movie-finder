<template>
  <div class="home">
    <search-form
      @submit="search()"
      v-model="query"
    />
    <error-message :error="error" />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm';
import ErrorMessage from '@/components/ErrorMessage';
import movieService from '@/services/movieService';

export default {
  name: 'Home',
  components: {
    SearchForm,
    ErrorMessage
  },
  data () {
    return {
      query: '',
      error: '',
    }
  },
  methods: {
    search () {
      const query = this.query;

      movieService.search(query).then((data) => {
        if (data.Response === "True") {
          this.$store.commit('setQuery', query);
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

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>