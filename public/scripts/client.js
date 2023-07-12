/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
const tweetData = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants",
  },
  created_at: 1688930721238,
};

const createTweetElement = (tweet) => {
  let $tweet = $(`
  <article class="tweets-container">
  <div class="header">
    <div class="name-avatar">
      <img src="${tweet.user.avatars}" alt="" width="40px" height="40px">
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

const $tweet = createTweetElement(tweetData);
console.log($tweet);
$(".tweets-container").append($tweet);
});