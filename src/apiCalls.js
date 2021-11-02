export const fetchTopStories = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
  .then(response => checkResponse(response))
}


const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    return Promise.reject(`error ${response.status}`)
  }
}
