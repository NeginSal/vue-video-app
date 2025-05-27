export function fetchMovieDetails() {
  return Promise.resolve({
    movieId: "m12345",
    title: "The Great Adventure",
    description: "An epic journey through uncharted lands.",
    releaseYear: 2023,
    rating: "PG-13",
    qualities: [
      { quality: "480p", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { quality: "720p", url: "https://www.w3schools.com/html/movie.mp4" }
    ],
    cast: [
      { name: "John Doe", role: "Explorer" },
      { name: "Jane Smith", role: "Navigator" }
    ]
  })
}
