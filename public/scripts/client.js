$(document).ready(function () {

const createTweetElement = function(tweet) {
  const formattedTime = timeago.format(tweet.created_at);// Use the timeago.format method to display the time passed since a tweet was created. 
  let $tweet = $(`
<article class="tweet-container">
<div class="header">
  <div class="name-avatar">
    <img src="${tweet.user.avatars}" alt="profile picture" width="40px" height="40px">
    <p class="tweet-author">${$("<div>").text(tweet.user.name).html()}</p>
  </div>
  <div class="username">
    <p class="tweet-username">${$("<div>").text(tweet.user.handle).html()}</p>
  </div>
</div>
<div class="tweet-content">
  <p>${$("<div>").text(tweet.content.text).html()}</p>
</div>
<footer>
<div class="tweet-date">
  <span>${formattedTime} </span>
</div>
<div class="tweet-icons">
  <i class="fa-sharp fa-solid fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
</div>
</footer>
</article>
`);
  return $tweet;
};
const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $(".tweets-container").empty();
  tweets.forEach((tweet) => {
    const $tweetElement = createTweetElement(tweet);
    $(".tweets-container").prepend($tweetElement);
  });
};
const loadTweets = () => {
  $.ajax({
    url: "/tweets",
    type: "GET",
    dataType: "json",
    success: (result) => {
      console.log(result);
      renderTweets(result);
    },
    error: (error) => {
      console.error("An error occured, ", error);
    },
  });
};

const postTweetData = (tweetContent) => {
  const data = $(".tweet-form").serialize();
  console.log(data);
  $.post("/tweets", data).then((result) => {
    console.log(result);
    loadTweets();
  });
};


  $(".tweet-form").on("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission
  // get the content from text tweet
  const tweetContent = $('#tweet-text').val();
  // validation check
  if (!tweetContent) {
    alert("Tweet content can not be empty");
    return;
  }
 
  if (tweetContent.length > 140) {
    alert("Tweet content exceeds the character limit");
    return;
  }

  postTweetData();
  });
});
