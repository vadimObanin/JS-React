let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
  while (
    numberOfFilms === null ||
    isNaN(numberOfFilms) ||
    numberOfFilms === ""
  ) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 31) {
    alert("вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for (i = 1; i < 4; i++) {
    const genres = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMovieDB.genres[i] = genres;
  }
}

writeYourGenres();

function showMyDb() {
  if (personalMovieDB.private === false) {
    console.log(personalMovieDB);
    console.log("Все сработало, поздравляю");
  }
}

showMyDb();
