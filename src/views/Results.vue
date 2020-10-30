<template>
  <div class="results">
    <h1>Showing top results for '{{ $store.state.query }}'</h1>

    <div class="slider-container">
      <movie-list :movies="$store.state.results" />
    </div>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList';

export default {
  name: 'Home',
  components: {
    MovieList
  },
  created () {
    if (!this.$store.state.results) {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.results {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slider-container {
  width: 100%;
}
</style>