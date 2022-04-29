import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import Grid from '@mui/material/Grid';


export const Loader = () => {

  

  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
    >
        <RingLoader
            color='#123abc'
        />
    </Grid>
  )
}
