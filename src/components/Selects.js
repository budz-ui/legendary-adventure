import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectCards from './SelectCards';
import { Box, Typography } from '@mui/material';

const Selects = () => {
  return (
    <Box sx={{justifyContent:"center",textAlign:"center"}}>
    <Typography variant="h5" sx={{mt:4}}> Popular Places</Typography>
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <SelectCards bg={BoraBora} text='Mombasa' />
    <SelectCards bg={BoraBora2} text='Diani' />
    <SelectCards bg={Maldives} text='Zanzibar' />
    <SelectCards bg={Maldives2} text='Watamu' />
    <SelectCards bg={Maldives3} text='Malindi' />
    <SelectCards bg={KeyWest} text='Kisumu' />
    </div>
    <Typography variant="h5" sx={{mt:4}}>About Us</Typography>
    <Typography variant="subtitle1" >AngelWays Tours and Travel company has a vast experience in handling inbound and outbound units</Typography>
    <Typography variant="subtitle1">Our commitment is to provide our clients with complete end to end booking solutions covering all</Typography>
    <Typography variant="subtitle1">of the travel needs with a proactive customer service.</Typography>
    </Box>
  )
}

export default Selects