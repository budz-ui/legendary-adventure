import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import React from 'react'
import KeyWest from '../assets/keywest.jpg';

const Hero = () => {
  return (
    <Card sx={{}}>
     <CardMedia
       component="img"
       sx={{height:600}}
       image={KeyWest}
       alt="Live from space album cover"
  />
      <Box sx={{ml:2,display:"flex",flexDirection:"column",justifyContent:"center",position:"absolute",color:"white",top:0,height:"100vh"}}>
        <Typography variant="h3">Travel Around </Typography>
        <Typography variant='h3'>The Beautiful World</Typography>
        <Typography variant="subtitle2">Look And Take Your Journey.See how </Typography>
        <Button variant="outlined" sx={{m:2,color:"white"}}>Explore Now</Button>
      </Box>
    </Card>
    
  );
};

export default Hero;