export async function getTweets() {

  const tweetsUrl = 'https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json';

  return new Promise(async (resolve, reject) => {
    const response = await fetch(tweetsUrl)
    const tweets = await response.json()
    resolve(tweets)
  });
}
