import { React, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


 


export const Main = ({nextPage}) => {
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'),);
    const [gender, setGender] = useState('');


    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleChange2 = (event) => {
        setGender(event.target.value);
      };
    
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

    <Container maxWidth="sm" style={{justifyContent: 'center'}}>
      <Box>
        <Card>
          
          <CardContent>
            <Stack spacing={3}>
                <h2>Info</h2>
                <Divider />
                <span>
                <TextField id="first-name" label="First Name" variant="standard" style={{marginRight:"20px"}}/>
                <TextField id="last-name" label="Last Name" variant="standard" />
                </span>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                    label="Birthday"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Gender"
                        onChange={handleChange2}
                    >
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                </FormControl>
                {gender == "Other" ? <TextField id="other" label="Other" variant="standard" /> : null }

                <TextField id="haircolor" label="haircolor" variant="standard" />

                <TextField id="eyecolor" label="Eyecolor" variant="standard" />

                <Divider />

                <TextField id="genre" label="Favorite Music Genre" variant="standard" />

            </Stack>
          </CardContent>


          <CardActions>
            <Button onClick={() => nextPage()}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  </Grid>
</>
  )
}
