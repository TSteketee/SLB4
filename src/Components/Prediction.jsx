import {React, useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Loader } from './Loader';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


import FadeInOut from "./FadeInOut";




export const Prediction = ({nextPage}) => {
    const [loading, setLoading] = useState(true)
    const [showLoader, setShowLoader] = useState(true)


    useEffect(() => {
        setTimeout(() => {
          setShowLoader(false);
        }, 5000)

        setTimeout(() => {
            setLoading(false);
          }, 5500)
      }, [])

      
  return (
<>
    {loading ? 
    <FadeInOut show={showLoader} duration={500} style={{textAlign:"center", alignItems:"center", justifyContent:"center"}}>
        <Loader />
    </FadeInOut>
    
    :
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
            <h2>Your favorite artist is:</h2>
        <Box>
            <Card>
                <h1 style={{margin: "20px"}}>Kendrick Lamar</h1>
            </Card>
        </Box>
        <Divider variant='middle'/>
        <hr style={{size:"20px"}}></hr>
        <h1></h1>
        <Button 
            onClick={() => nextPage()}
            variant="outlined"
            >
            OPEN THE BLACKBOX
        </Button>
    </Grid>
}
    </>
  )
}
