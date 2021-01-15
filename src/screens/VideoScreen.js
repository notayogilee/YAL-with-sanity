import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoScreen = () => {
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://googleapis.com/youtube/v3/playlistitems';

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippit&playlistId=PLve5QUD_IO6P3q-6JLhQqew-6qt1V3A15&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then((res) => setData(res))
      .catch((err) => console.error(err))

  }, [])

  console.log(data)
  return (
    <div>
      <h1>VideoScreen</h1>
    </div>
  )
}

export default VideoScreen
