export async function fetchMovieDetails() {
  return {
    movieId: 'm12345',
    title: 'The Great Adventure',
    description: '.An epic journey through uncharted lands',
    releaseYear: 2023,
    rating: 'PG-13',
    qualities: [
      { quality: '480p', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { quality: '720p', url: 'https://www.w3schools.com/html/movie.mp4' },
      { quality: '1080p', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ]
  }
}

export async function loginUser(username, password) {
  if (username === 'user' && password === 'password') {
    return { token: 'your_jwt_token_here' }
  } else {
    alert('Invalid credentials')
  }
}