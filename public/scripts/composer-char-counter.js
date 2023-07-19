$(document).ready(function () {
  // Get the textarea element
  const textarea = $("#tweet-text");

  // Add event listener to the textarea
  textarea.on("input", updateCharacterCount);

  // Function to update character count
  function updateCharacterCount() {
    const text = $(this).val();
    const charCount = text.length;
    const counter = $(this).next().find(".counter");
    const remainingCount = 140 - charCount;
    counter.text(remainingCount);
    if (remainingCount < 0) {
      counter.addClass("exceeded");
    } else {
      counter.removeClass("exceeded");
    }
  }
});
