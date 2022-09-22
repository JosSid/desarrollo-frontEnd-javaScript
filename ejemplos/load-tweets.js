import { getTweets } from "./tweet-service.js";
import { buildTweetView } from "./tweet-view.js";


export async function loadTweetsController (tweetsContainerElement) {
  const tweets = await getTweets();

  for (const tweet of tweets) {
    const articleElement = document.createElement("article");
  
    articleElement.innerHTML = buildTweetView(tweet);
  
    tweetsContainerElement.appendChild(articleElement);
  };
};