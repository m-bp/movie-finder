<template>
  <div class="results">
    <h1>Showing top results for '{{ $store.state.query }}'</h1>

    <div class="slider-container">
      <movie-slider :movies="$store.state.results" />
    </div>
  </div>
</template>

<script>
import MovieSlider from '@/components/MovieSlider';

export default {
  name: 'Home',
  components: {
    MovieSlider
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