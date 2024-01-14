async function fetchMovie() {
  const movieSearch = await document.querySelector(".search-input").value;
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=b9f56494&s=${movieSearch}`
  );

  const data = await response.json();

  return data.Search;
}

async function renderMovie() {
  try {
    const movies = await fetchMovie();
    const movieList = document.querySelector("#movie-list");
    let movieHTML = "";

    for (let i = 0; i < 6; i++) {
      movieHTML += `<div class="movie-section">
        <img src="${movies[i].Poster}" alt="{}" class="movie-img">
        <div class="movie-info">
            <span class="movie-span">Title: <p class="movie-para">${movies[i].Title}</p> </span>
            <span class="movie-span">Year: <p class="movie-para">${movies[i].Year}</p> </span>
            <span class="movie-span">Type: <p class="movie-para">${movies[i].Type}</p> </span>
        </div>
    </div>    
`;
    }

    movieList.innerHTML = movieHTML;
  } catch (error) {
    if(error !== "TypeError: Cannot read properties of undefined (reading '0')"){
        alert("SORRY,I CANNOT FIND IT");
    }
  }
}

renderMovie();
