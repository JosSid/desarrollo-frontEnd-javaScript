export const buildTweetView = (tweet) => {
  const formattedDate = new Date(tweet.date);

  const tweetView = `
    <p>${tweet.handler}</p>
    <p>${tweet.body}</p>
    <p>${formattedDate.toISOString()}</p>
  `

  return tweetView;
}
