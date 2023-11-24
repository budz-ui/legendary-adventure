import { Box, Typography } from '@mui/material';

const Navbar = () => {
  
  return (
    <Box className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <Box>
        <Typography variant="h4">Travel Jungle.</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;