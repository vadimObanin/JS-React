const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели", "");
    while (
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count === ""
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let a;
      let b;
      do {
        a = prompt("Один из последних просмотренных фильмов", "");
      } while (a === null || a.length > 50 || a === "");
      do {
        b = prompt("На сколько оцените его", "");
      } while (b === null || b.length > 50 || b === "");

      personalMovieDB.movies[a] = b;
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 31) {
      alert("вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  writeYourGenres: function () {
    for (i = 1; i < 4; i++) {
      let genres = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (genres === "" || genres == null) {
        console.log("Вы ввели не корректные данные");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
      }
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  showMyDb: function () {
    if (personalMovieDB.private === false) {
      console.log(personalMovieDB);
      console.log("Все сработало, поздравляю");
    }
  },
};
