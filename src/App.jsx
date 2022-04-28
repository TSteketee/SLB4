import { React, useState, useEffect } from 'react'
import './App.css'
import Button from '@mui/material/Button';

import { Main } from './Components/Main'
import { Landing } from './Components/Landing'
import {Prediction} from './Components/Prediction'
import {PredictionOptions} from './Components/PredictionOptions'
import { Blackbox } from './Components/Blackbox';


import FadeInOut from "./Components/FadeInOut";

function App() {
const [page, setPage] = useState(0)
const [show, setShow] = useState(true);


const nextPage = () => {
  setShow(false);
  setTimeout(() => {
    setPage(page + 1)
    setShow(true);
  }, 500);
}

const returnToHome = () => {
  setShow(false);
  setTimeout(() => {
    setPage(0)
    setShow(true);
  }, 500);
}



const pages = [
  <Landing              nextPage={nextPage} />,
  <PredictionOptions    nextPage={nextPage} />,
  <Main                 nextPage={nextPage} />,
  <Prediction           nextPage={nextPage} />,
  <Blackbox             returnToHome={returnToHome} />

]

  
  return (
    <>
      <FadeInOut show={show} duration={500}>
        {pages[page]}
      </FadeInOut>
    </>
  )
}

export default App
