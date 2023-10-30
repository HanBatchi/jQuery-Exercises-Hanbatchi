$(document).ready(function() {
  // Form submission event
  $('#movies-form').submit(function(event) {
    event.preventDefault();

    // Get values from the form inputs
    const title = $('#title').val();
    const rating = $('#rating').val();

    // Validate inputs
    if (title.length < 2) {
      alert('Movie title must have at least 2 characters.');
      return;
    }
    if (rating < 0 || rating > 10) {
      alert('Rating must be between 0 and 10.');
      return;
    }
    const listItem = `<li>${title} (Rating: ${rating}) <button class="remove">Remove</button></li>`;

    // Append the new list item to the movies list
    $('#movies').append(listItem);

    // Clear the form inputs
    $('#title').val('');
    $('#rating').val('');
  });

  // Remove movie event
  $('#movies').on('click', 'button.remove', function() {
    $(this).parent().remove();
  });

  function sortMoviesByTitle(ascending) {
    const moviesList = $('#movies');
    const movies = moviesList.children('li').get();

    movies.sort(function(a, b) {
      const titleA = $(a).text().toUpperCase();
      const titleB = $(b).text().toUpperCase();
      return ascending ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    });

    $.each(movies, function(index, movie) {
      moviesList.append(movie);
    });
  }

  // Function to sort the movies list by rating
  function sortMoviesByRating(ascending) {
    const moviesList = $('#movies');
    const movies = moviesList.children('li').get();

    movies.sort(function(a, b) {
      const ratingA = parseInt($(a).text().match(/\d+/));
      const ratingB = parseInt($(b).text().match(/\d+/));
      return ascending ? ratingA - ratingB : ratingB - ratingA;
    });

    $.each(movies, function(index, movie) {
      moviesList.append(movie);
    });
  }

  // Sort by title (A-Z) 
  $('#sort-title-asc').on('click', function() {
    sortMoviesByTitle(true);
  });

  // Sort by title (Z-A) 
  $('#sort-title-desc').on('click', function() {
    sortMoviesByTitle(false);
  });

  // Sort by rating (Low to High) 
  $('#sort-rating-asc').on('click', function() {
    sortMoviesByRating(true);
  });

  // Sort by rating (High to Low) 
  $('#sort-rating-desc').on('click', function() {
    sortMoviesByRating(false);
  });
});
