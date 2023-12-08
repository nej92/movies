document.addEventListener('DOMContentLoaded', () => {
  showMovies()
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