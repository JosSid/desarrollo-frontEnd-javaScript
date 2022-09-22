import { loadTweetsController } from "./load-tweets.js";

document.addEventListener('DOMContentLoaded', () => {
  const tweetListElement = document.querySelector('#tweet-list');

  loadTweetsController(tweetListElement)
})
