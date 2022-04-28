import React from 'react'
import Button from '@mui/material/Button';
import Popup from './Popup';
import BackgroundEffect from './BackgroundEffect';


const nodes = [
  {
   "title": "Ted",
   "text": "47% of the people in the us that are named Ted listen to Kendrick Lamar."
  },
  {
   "title": "Steketee",
   "text": "37% of the people in the us that are named Steketee listen to Kendrick Lamar."
  },
  {
    "title": "29-03-1999",
    "text": "45% of the people in the us that are born on 29-03-1999 listen to Kendrick Lamar."
   },
   {
    "title": "Male",
    "text": "23% of the people that are male listen to Kendrick Lamar."
   },
   {
    "title": "Haircolor",
    "text": "56% of the people with blonde hair listen to Kendrick Lamar."
   },
   {
    "title": "Eyecolor",
    "text": "24% of the people with brown eyes listen to Kendrick Lamar."
   },
   {
    "title": "Favorite music genre",
    "text": "Hiphop is the most popular music genre in the us."
   }
 ]

export const Blackbox = ({returnToHome}) => {
  return (
    <>
        <BackgroundEffect />
        {nodes.map((node, i) => {
          // set bounderies to 300px inside the innerwidth and innerheight
          const bounderies = {
            x: Math.floor(Math.random() * (window.innerWidth - 300)),
            y: Math.floor(Math.random() * (window.innerHeight - 300))
          }
          const x = Math.floor((0.3 + (Math.random() * 0.5)) * (window.innerWidth))
          const y = Math.floor((0.3 + (Math.random() * 0.5)) * (window.innerHeight))
          console.log(Math.random())
          return (
            <Popup key={i} pos={{x: x, y: y}} text={node.text} title={node.title} />
          )
        })}

        <Button onClick={() => returnToHome()}>Try Again</Button>
    </>
  )
}
