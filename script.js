const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  do {
    var a = prompt("Один из последних просмотренных фильмов", "");
  } while (a === null || a.length > 50 || a === "");
  do {
    var b = prompt("На сколько оцените его", "");
  } while (b === null || b.length > 50 || b === "");

  personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count >= 31) {
  alert("вы киноман");
} else {
  alert("Произошла ошибка");
}
