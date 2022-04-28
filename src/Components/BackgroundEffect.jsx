import React from 'react'
import useWindowDimensions from './useWindowDimensions'


const BackgroundEffect = () => {
    const { width, height } = useWindowDimensions();
    return (
        <iframe src="https://eclectic-narwhal-269c18.netlify.app/" width={width - 30} height={height -30} allowFullScreen={true} frameBorder="0"></iframe>
  )
}

export default BackgroundEffect