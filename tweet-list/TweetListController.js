import { pubSub } from "../pubSub.js";
import { getTweets } from "./tweet-list-provider.js";
import { buildEmptyTweetList, buildTweetListSpinner, buildTweetView } from "./tweet-list-view.js";


export class TweetListController {

  constructor(nodeElement) {
    this.tweetsContainerElement = nodeElement;

    this.loadTweets()
  }

  async loadTweets() {
    this.tweetsContainerElement.innerHTML = buildTweetListSpinner()
    let tweets = [];

    try {
      tweets = await getTweets();
    } catch (error) {
      // this.notificationController.showNotification(error)
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, error)
    }

    if (tweets.length === 0) {
      this.showTweetsNotFound()
    }

    // spinnerElement.remove();
    this.tweetsContainerElement.querySelector('.spinner').classList.toggle('hide')

    this.drawTweets(tweets)
  }

  showTweetsNotFound() {
    const divElement = document.createElement('div');
    divElement.innerHTML = buildEmptyTweetList()
    this.tweetsContainerElement.appendChild(divElement)
  }

  drawTweets(tweets) {
    for (const tweet of tweets) {
      const articleElement = document.createElement('article');
    
      articleElement.innerHTML = buildTweetView(tweet)

      this.tweetsContainerElement.appendChild(articleElement);
    }
  }


}


// OLD CONTROLLER
/*
export async function loadTweetsController(tweetsContainerElement) {

  tweetsContainerElement.innerHTML = buildTweetListSpinner()

  const tweets = await getTweets();
  // spinnerElement.remove();
  tweetsContainerElement.querySelector('.spinner').classList.toggle('hide')

  for (const tweet of tweets) {
    const articleElement = document.createElement('article');
  
    articleElement.innerHTML = buildTweetView(tweet)

    tweetsContainerElement.appendChild(articleElement);
  }

}
*/
