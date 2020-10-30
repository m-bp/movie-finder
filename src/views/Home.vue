<template>
  <div class="home">
    <div
      v-if="error"
      class="error"
    >
      {{ error }}
    </div>
    <search-form
      @submit="search()"
      v-model="query"
    />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm';
import movieService from '@/services/movieService';

export default {
  name: 'Home',
  components: {
    SearchForm
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

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>