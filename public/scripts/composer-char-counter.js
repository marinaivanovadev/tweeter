// $(document).ready(function(){
//   console.log('composer-char-counter.js loaded successfully');
// // Get the textarea element
// const textarea = document.getElementById('tweet-text');
// // Add event listener to the textarea
// textarea.addEventListener('input', updateCharacterCount);
// // Get the counter element
// const counter = document.getElementsByClassName('counter');

// // Function to update character count
// function updateCharacterCount() {
//   const text = $(this).val();
//   const charCount = text.length;
//   counter[0].textContent = charCount;
//   const remainingCount = 140 - charCount;
//   console.log(remainingCount);
//   counter[0].textContent = remainingCount;
//   if (remainingCount < 0) {
//     counter[0].classList.add('exceeded');
//   } else {
//     counter[0].classList.remove('exceeded');
//   }
// }
// });



$(document).ready(function() {
  //console.log('composer-char-counter.js loaded successfully');

  // Get the textarea element
  const textarea = $('#tweet-text');

  // Add event listener to the textarea
  textarea.on('input', updateCharacterCount);

  // Function to update character count
  function updateCharacterCount() {
    const text = $(this).val();
    const charCount = text.length;
    const counter = $(this).next().find('.counter');
    const remainingCount = 140 - charCount;
    counter.text(remainingCount);
    if (remainingCount < 0) {
      counter.addClass('exceeded');
    } else {
      counter.removeClass('exceeded');
    }
  }
});