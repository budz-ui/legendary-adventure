import React from 'react';
import { Box, Typography } from '@mui/material';

const Search = () => {
  return (
    <Box className='max-w-[1240px] mx-auto grid'>
      <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
        <Box>
          <Typography variant="h6">LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</Typography>
          <Typography variant="subtitle1">
            Come experience the very pinnacle of luxury African all-inclusive
            vacations for couples at AngelWays Tours. Luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Zanzibar, Dar es salaam, Lamu, Watamu, Diani and
            Kisumu, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, ANGELWAYS is
            the leader in Africa destination weddings and honeymoon packages.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;