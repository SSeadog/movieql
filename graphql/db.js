let movies = [
  {
    id: 0,
    name: "Avengers1",
    score: 0.2,
  },
  {
    id: 1,
    name: "Avengers2",
    score: 0.2,
  },
  {
    id: 2,
    name: "Avengers3",
    score: 0.2,
  },
  {
    id: 3,
    name: "Avengers4",
    score: 0.2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
