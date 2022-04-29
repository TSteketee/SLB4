import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';

export const PredictionOptions = ({nextPage}) => {
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
        <h1>What would you like to predict?</h1>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button  onClick={() => nextPage()} >Favorite Music Genre</Button>
            <Button  onClick={() => nextPage()} disabled>Favorite Movie Genre</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button  onClick={() => nextPage()} disabled>Eye Color</Button>
            <Button  onClick={() => nextPage()} disabled>Hair Color</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button  onClick={() => nextPage()} disabled>Time To Live</Button>
            <Button  onClick={() => nextPage()} disabled>Date Of Birth</Button>
        </ButtonGroup>



    </Grid>
    </>
  )
}
