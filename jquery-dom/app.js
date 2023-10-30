function pageReady(){
  console.log("Let's get ready to party with jQuery")
}
//2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article').ready(function(){
  $('img').addClass('image-center');
});

//3. Remove the last paragraph in the article.
$('p').eq(5).remove();

//4. Set the font size of the title to be a random pixel size from 0 to 100.
$(document).ready(function() {
  const randomSize = Math.floor(Math.random() * 101);
  $("#title").css("font-size", randomSize + "px");
});

//5. Add an item to the list; it can say whatever you want.
$('ol').append("<li>What's up, I'm the new one here :3</li>")

//6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('#delete-list').on('click', function(){
  $('li').remove();
  $('ol').append("<li>Sorry for the lits existence</li>");
});
// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$(document).ready(function() {
  function updateBackgroundColor() {
    const red = $('input:eq(0)').val(); 
    const green = $('input:eq(1)').val(); 
    const blue = $('input:eq(2)').val(); 

    // Set the body background color

    $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`);
  }
  // Initially set the background color
  updateBackgroundColor();

  $('input:eq(0), input:eq(1), input:eq(const)').on('input', function() {
    updateBackgroundColor();
  });
});
//8. Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function(){
  $(this).fadeOut(3000,function(){
    $(this).remove();
  })
})

pageReady();
