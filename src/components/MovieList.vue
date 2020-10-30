<template>
  <div>
    <div
      v-for="movie in movies"
      :key="movie.imdbID"
    >
      <p>{{ movie.Title }}</p>
      <img
        :src="movie.Poster"
        :alt="'Poster for ' + movie.Title"
      />
      <p>{{ movie.Director }}</p>
      <p>{{ movie.Year }}</p>
      <pre>{{ movie }}</pre>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array,
  },
};
</script>

<style scoped></style>
