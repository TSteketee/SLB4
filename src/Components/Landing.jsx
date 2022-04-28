import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export const Landing = ({setPage, page, nextPage}) => {
  return (
    <>
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
        <h2>Welcome to </h2>
        <Divider variant='middle'/>
        <h1>Open the blackbox</h1>
        <Button 
            onClick={() => nextPage()}
            variant="outlined"
            >
              MAKE PREDICTION
        </Button>
    </Grid>
    </>
  )
}