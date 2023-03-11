function movieInfoParser(input) {
  let movies = [];

  for (const line of input) {
    let tokens = line.split(' ');
    if (line.includes('addMovie')) {
      let movieName = tokens.slice(1).join(' ');
      addMovie(movieName);
    } else if (line.includes('directedBy')) {
      let indexOfCommand = tokens.indexOf('directedBy');
      let movieName = tokens.slice(0, indexOfCommand).join(' ');
      let director = tokens.slice(indexOfCommand + 1).join(' ');
      addDirector(movieName, director);
    } else {
      let indexOfCommand = tokens.indexOf('onDate');
      let movieName = tokens.slice(0, indexOfCommand).join(' ');
      let date = tokens.slice(indexOfCommand + 1).join(' ');
      addDate(movieName, date);
    }
  }

  for (const movie of movies) {
    if (Object.keys(movie).length >= 3) {
      console.log(JSON.stringify(movie));
    }
  }

  function addMovie(name) {
    movies.push({ name });
  }

  function addDirector(name, director) {
    let movie = movies.find((x) => x.name === name);
    if (movie) {
      movie.director = director;
    }
  }

  function addDate(name, date) {
    let movie = movies.find((x) => x.name === name);
    if (movie) {
      movie.date = date;
    }
  }
}
