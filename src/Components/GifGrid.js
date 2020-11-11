import React from 'react'

 const GifGrid = ({category}) => {

    const getGifs = async () => {
        const apikey = 'H8ZEIA0RMqHdswgwyykE1Z8wlZDAqLdG'

        const url = `https://api.giphy.com/v1/gifs/search?q=rick%20and%20martin&limit=10&api_key=${apikey}`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map((img) =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }
    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid