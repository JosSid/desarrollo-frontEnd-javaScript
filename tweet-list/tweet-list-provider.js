export async function getTweets() {

  const tweetsUrl = 'https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json';
  // const tweetsUrl = 'https://images.pexels.com/photos/13252401/pexels-photo-13252401.jpeg';

    let response;

    try {
      response = await fetch(tweetsUrl)
    } catch (error) {
      throw new Error('El dominio no existe')
    }

    if (!response.ok) {
      throw new Error('Tweets no encontrados');
    }

    try {
      const tweets = await response.json()
      return tweets
    } catch (error) {
      throw new Error('La respuesta no es válida'); 
    }

}
