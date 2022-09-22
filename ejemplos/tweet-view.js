export const buildTweetView = (tweet) => {
  const formateDate = new Date(tweet.date);

  const tweetView = `
    <p>${tweet.handle}</p>
    <p>${tweet.content}</p>
    <p>${formateDate.toDateString()}</p>
    `;

  return tweetView;
};
