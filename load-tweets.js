import { tweets } from "./tweet-service.js";
import { buildTweetView } from "./tweet-view.js";


const tweetListElement = document.querySelector('#tweet-list');

for (const tweet of tweets) {
  const articleElement = document.createElement('article');

  articleElement.innerHTML = buildTweetView(tweet)

  tweetListElement.appendChild(articleElement);
}
