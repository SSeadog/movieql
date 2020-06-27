let movies = [
  {
    id: "0",
    name: "Avengers1",
    score: "0.2",
  },
  {
    id: "1",
    name: "Avengers2",
    score: "0.2",
  },
  {
    id: "2",
    name: "Avengers3",
    score: "0.2",
  },
  {
    id: "3",
    name: "Avengers4",
    score: "0.2",
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
