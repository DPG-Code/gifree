const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const API_URL = process.env.NEXT_PUBLIC_API_URL

// Filter information of gif details: title, id and url.
const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse
  const { images, title, id } = data
  const { url } = images.downsized_medium
  return { title, id, url }
}

// Get a single of gif detail from a "id".
export default async function getSingleGif({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
