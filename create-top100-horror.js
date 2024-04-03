const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on('request', (req) => {
    if(req.resourceType() === 'stylesheet' || req.resourceType() === 'font'){
      req.abort();
    }
    else {
      req.continue();
    }
  });

  await page.goto('https://www.imdb.com/search/title/?title_type=feature&num_votes=4000,&genres=horror', {waitUntil: 'domcontentloaded'});
  await page.click('.ipc-see-more__button');
  await new Promise(resolve => setTimeout(resolve, 3000)); // Espera por 3 segundos
  
  const movies = await page.evaluate(async () => {
    const moviesArray = Array.from(document.querySelectorAll(".ipc-title")).slice(1, -1);
    const allMovies = moviesArray.map((movieTitle) => ({
      title: movieTitle.innerText,
      date: movieTitle.parentNode.querySelector(".dli-title-metadata").innerText.slice(0, 4),
      duration: movieTitle.parentNode.querySelector(".dli-title-metadata").innerText.slice(5).split("\n")[0],
      score: movieTitle.parentNode.querySelector(".metacritic-score-box") ? movieTitle.parentNode.querySelector(".metacritic-score-box").innerText : "Indefinido",
    }));
    return allMovies;
  });

  await browser.close();


  console.log(movies);
  const fs = require('fs');
  fs.writeFileSync('filmes-terror.txt', JSON.stringify(movies, null, 2));
})();