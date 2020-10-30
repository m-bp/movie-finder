<template>
  <div>
    <span>Results go here</span>
    <movie-list :movies="$store.state.results" />
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