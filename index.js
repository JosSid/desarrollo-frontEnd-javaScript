import { TweetListController } from "./tweet-list/TweetListController.js";

document.addEventListener('DOMContentLoaded', () => {
  const tweetListElement = document.querySelector('#tweet-list');

  const tweetListController = new TweetListController(tweetListElement)

})
