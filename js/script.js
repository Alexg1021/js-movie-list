let movies = [
  {
    id: 1,
    title: 'Kill Bill',
    description: 'description',
    year: 2011,
    genre: 'Action',
    imdbRating: 7.5,
  },
  {
    id: 2,
    title: 'Godzilla',
    description: 'description',
    year: 2011,
    genre: 'Action',
    imdbRating: 7.5,
  },
  {
    id: 3,
    title: 'Pacific Rim',
    description: 'description',
    year: 2011,
    genre: 'Action',
    imdbRating: 7.5,
  },
  {
    id: 4,
    title: 'Reservoir Dogs',
    description: 'description',
    year: 2011,
    genre: 'Action/Drama',
    imdbRating: 7.5,
  },
];

const alertMovieDetails = movieTitle => {
  //   debugger;
  let foundMovie = movies.find(movie => {
    return movie.title === movieTitle;
  });
  if (foundMovie) {
    alert(`${foundMovie.title}: ${foundMovie.description}`);
  } else {
    alert('Movie was not found :(');
  }
};
// alertMovieDetails('Reservoir3 Dogs');

// Add New Movie Object to movies array
const addNewMovie = (id, title, description, year, genre, imdbRating) => {
  // Create a new movie object
  let newMovie = {
    id,
    title,
    description,
    year,
    genre,
    imdbRating,
  };
  console.log(newMovie);
  // Push our new object into our movies array
  movies.push(newMovie);
  console.log(movies);
};

addNewMovie(5, 'Elf', 'Haha Funny!', 2002, 'Comedy', 8.0);

// Remove movie from array based on a condition
const removeMovie = movieId => {
  movies = movies.filter(movie => {
    return movie.id !== movieId;
  });
  console.log(movies);
};

removeMovie(3);
