import React from 'react'
import Help from '@mui/icons-material/Help';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';


const Popup = ({pos, text, title}) => {
  return (
    <>
        <div className='popupContainer'>
            <div className="popup" style={{position:"absolute" ,top: pos.y, left: pos.x}}>
                <div className="icon" style={{position: "absolute", height: "50px", transition: "0.3s"}}>
                    <Help />
                </div>

                <div className="textbox">
                    <Card>
                        <CardContent>
                            <Box p={1}>
                                <h1>{title}</h1>
                                <p>{text}</p>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup