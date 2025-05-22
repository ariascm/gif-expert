
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wfYqUvV3kYEy5aTu0X2TaN0punka1NzU&q=${category}&limit=10`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(img => ({
        title: img.title,
        id: img.id,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}