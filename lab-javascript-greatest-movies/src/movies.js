// Iteration 1: All directors? - Get the array of all directors.

/* Forma 1: */
function getAllDirectors(movieArr) {
    return movieArr.map(m => m.director);
}
/* Forma 2: */
// const getAllDirectors = directors => movieArr.map(m => m.director);
// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArr) {
    const numMovies = movieArr.filter(m => m.director == "Steven Spielberg" && m.genre.includes("Drama")); 
    return numMovies.length;
}
// console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArr) {
    const filterRate = movieArr.filter(m => m.rate);
    const rates = filterRate.map(m => m.rate);    
    const sum = rates.reduce((a,c) => a+c, 0);
    const avg = sum/movieArr.length;  
    if(isNaN(avg)) { return 0; }
    return Number.parseFloat(avg.toFixed(2));
}
// console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArr) {
    const filterDrama = movieArr.filter(m => m.genre.includes("Drama"));
    const avgDrama = filterDrama.map(m => m.rate);
    const sum = avgDrama.reduce((a,c) => a+c, 0);
    const avg = sum/avgDrama.length;
    if(isNaN(avg)) { return 0; }
    return Number.parseFloat(avg.toFixed(2));
}
//   console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArr) {    
    const sortYear = movieArr.sort((a,b) => {
      if(a.year - b.year == 0) {
        var titleA = a.title.toUpperCase();
        var titleB = b.title.toUpperCase();
        if(titleA < titleB) {
           return -1;
         } else if (titleA > titleB) {
           return 1;
         } else { return 0; }
      }
      return a.year - b.year;
    });        
    return sortYear;
  }
// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArr) {
    const movies = movieArr.slice(0);
    const order = movies.sort((a,b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if(titleA < titleB) {
        return -1;
      } else if(titleA < titleB) {
        return 1;
      } else { return 0; }
    });
    const sliced = order.slice(0, 20); 
    const first20Movies = sliced.map(m => m.title); 
    return first20Movies;
}
// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

