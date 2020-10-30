# movie-finder

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

# Assignment
Create a website called MovieFinder meeting the following requirements:

- MovieFinder is a search engine for movies.
- It should have at least a homepage and a results page.
- The homepage should contain a search box.
- The search box should allow the user to search for movies by Title.
- The results page should display the found movies in a slider.
- Every movie slide should contain the movie Title, Poster, Director and Year.

You can use The Open Movie Database’s API (https://www.omdbapi.com/) to fetch information about movies.

# Note
I did not include the Director of the movie because the search API for OMDB does not include it in its data and I would have to make a separate request by imdbID to get any more information. I could have done this but chose not to for the sake of time.