import {Grid, Typography } from '@mui/material';
import React from 'react';


const Footer = () => {
  return(
    <Grid container spacing={{xs:2,md:3}} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-between" textAlign="center"  backgroundColor="green" color= "white">
     <Grid item xs={2}>
       <Typography variant="h6">Need help?</Typography>
       <Typography variant="body1">Got questions?</Typography>
       <Typography variant="body2">Call Us:</Typography>
       <Typography variant="body2">+254746023264/+254729164154</Typography>
       <Typography variant="body1" sx={{mt:1}}>Contact Info:</Typography>
       <Typography variant="body2">Utalii Hse,2nd Floor</Typography>
       <Typography variant="body2">Mail:angelwaystravel@gmail.com</Typography>
     </Grid>
     <Grid item xs={2}>
       <Typography variant="h6">Company</Typography>
       <Typography variant="body2" sx={{m:1}}>About Us</Typography>
       <Typography variant="body2" sx={{m:1}}>Careers</Typography>
       <Typography variant="body2" sx={{m:1}}>Terms of use</Typography>
       <Typography variant="body2" sx={{m:1}}>Privacy Statement</Typography>
       <Typography variant="body2" sx={{m:1}}>Give us feedback</Typography>
     </Grid>
     <Grid item xs={2}>
       <Typography variant="h6">Offer Services</Typography>
       <Typography variant="body2" sx={{m:1}}>Investor Relations</Typography>
       <Typography variant="body2" sx={{m:1}}>Rewards Program</Typography>
       <Typography variant="body2" sx={{m:1}}>Points Plus</Typography>
       <Typography variant="body2" sx={{m:1}}>Partners</Typography>
       <Typography variant="body2" sx={{m:1}}>List My Hotel</Typography>
     </Grid>
     <Grid item xs={2}>
       <Typography variant="h6">Support</Typography>
       <Typography variant="body2" sx={{m:1}}>Account</Typography>
       <Typography variant="body2" sx={{m:1}}>Legal</Typography>
       <Typography variant="body2" sx={{m:1}}>Contact</Typography>
       <Typography variant="body2" sx={{m:1}}>Affiliate</Typography>
     </Grid>
    </Grid>
  );
};

export default Footer;