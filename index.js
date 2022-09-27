import { NotificationController } from "./NotificationController.js";
import { TweetListController } from "./tweet-list/TweetListController.js";

document.addEventListener('DOMContentLoaded', () => {
  const tweetListElement = document.querySelector('#tweet-list');
  const notificationElement = document.querySelector('#notification');

  const notificationController = new NotificationController(notificationElement)
  const tweetListController = new TweetListController(tweetListElement)
})
