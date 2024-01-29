document.addEventListener('DOMContentLoaded', () => {
  setInterval(showMovies, 5000)
})

document.addEventListener('keyup', e => {
  if (e.target.matches('#search')) {
    document.querySelectorAll('.movies').forEach(movie => {
      movie.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? movie.classList.remove('filtro') : movie.classList.add('filtro')
    })
  }
})

function showMovies() {
  peliculas.forEach(peli => {
    $('#content').append(`
      <div class="movies">
        <h3 style="display: none">${peli.name}</h3>
        <img src="${peli.img}">
      </div>
      `
    )
  })
}

$("#sin_saga").on('click', function () {
  if ($('#sin_saga').prop("checked")) {
    $('.movies').remove()
    let sinSaga = peliculas.filter(peliculas => peliculas.saga == false);
    for (m of sinSaga) {
      $('#content').append(`
      <div class="movie">
        <h3 style="display: none">${m.name}</h3>
        <img src="${m.img}">
      </div>
      `
      )
    }
  } else {
    $('.movie').remove();
    showMovies()
  }
});

$("#saga").on('click', function () {
  if ($('#saga').prop("checked")) {
    $('.movies').remove()
    let soloSaga = peliculas.filter(peliculas => peliculas.saga == true);
    for (m of soloSaga) {
      $('#content').append(`
      <div class="movie">
        <h3 style="display: none">${m.name}</h3>
        <img src="${m.img}">
      </div>
      `
      )
    }
  } else {
    $('.movie').remove();
    showMovies()
  }
});