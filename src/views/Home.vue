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
      >
    </form>
    <div>
      <div
        v-for="result in results"
        :key="result.imdbID"
      >
        <p>{{ result.Title }}</p>
        <img
          :src="result.Poster"
          :alt="'Poster for ' + result.Title"
        />
        <p>{{ result.Director }}</p>
        <p>{{ result.Year }}</p>
        <pre>{{ result }}</pre>
        <hr>
      </div>
    </div>
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
      results: [],
    }
  },
  methods: {
    search () {
      movieService.search(this.query).then((data) => {
        console.log(data);

        if (data.Response === "True") {
          this.results = data.Search;
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
