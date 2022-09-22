export const buildTweetView = (tweet) => {
  const formattedDate = new Date(tweet.date);

  const tweetView = `
    <p>${tweet.handle}</p>
    <p>${tweet.content}</p>
    <p>${formattedDate.toISOString()}</p>
  `

  return tweetView;
}
