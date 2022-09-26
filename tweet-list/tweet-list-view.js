export const buildTweetView = (tweet) => {
  const formattedDate = new Date(tweet.date);

  const tweetView = `
    <p>${tweet.handle}</p>
    <p>${tweet.content}</p>
    <p>${formattedDate.toISOString()}</p>
  `

  return tweetView;
}

export const buildTweetListSpinner = () => {
  return `
  <div class="spinner"><div></div><div></div><div></div></div>
  `
}

export const buildEmptyTweetList = () => {
  return `
  <h2>No hay tweets disponibles.</h2>
  `
}
