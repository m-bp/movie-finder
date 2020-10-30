<template>
  <splide
    :options="options"
    class="movie-slider"
  >
    <splide-slide
      v-for="movie in movies"
      :key="movie.imdbID"
      class="movie-slider__slide"
    >
      <div class="movie">
        <h2 class="movie__title">{{ movie.Title }} ({{ movie.Year }})</h2>
        <img
          class="movie__image"
          :src="movie.Poster"
          :alt="'Poster for ' + movie.Title"
        />
      </div>
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: 'MovieList',
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    movies: Array,
  },
  data () {
    return {
      options: {
        perPage: 5,
        perMove: 5,
        rewind: true,
      },
    };
  },
};
</script>

<style lang="scss">
.movie {
  position: relative;
  padding: 1em;
  background: $color-red;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &__title {
    font-size: 1em;
    width: 100%;
    color: $color-yellow;
  }

  &__image {
    width: 100%;
    height: auto;
  }
}
.movie-slider {
  background: black;
  padding: 2em;

  &__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }
}
</style>
