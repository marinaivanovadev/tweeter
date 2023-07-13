/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const tweetData = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1688966156872,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1689052556872,
    },
  ];
  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $(".tweets-container").empty();
    tweets.forEach((tweet) => {
      const $tweet = createTweetElement(tweet);
      $(".tweets-container").append($tweet);
    });
  };

  const createTweetElement = function(tweet) {
    let $tweet = $(`
  <article class="tweet-container">
  <div class="header">
    <div class="name-avatar">
      <img src="${tweet.user.avatars}" alt="profile picture" width="40px" height="40px">
      <p class="tweet-author">${tweet.user.name}</p> 
    </div>
    <div class="username">
      <p class="tweet-username">${tweet.user.handle}</p>
    </div>
  </div>
  <div class="tweet-content">
    <p>${tweet.content.text}</p>
  </div>
  <footer>
  <div class="tweet-date">
    <span>${tweet.created_at}</span>
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
  const getTweetData = () => {
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
  
  const postTweetData = () => {
    const data = $(".tweet-form").serialize();
    console.log(data);
    $.post("/tweets", data).then((result) => {
      console.log(result);
      getTweetData();
    });
  };


  renderTweets(tweetData);
  $(".tweet-form").on("submit", (event) => {
  event.preventDefault();
  console.log("HERE");
  postTweetData();
  });
});
