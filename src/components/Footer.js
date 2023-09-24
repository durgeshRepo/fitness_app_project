import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-3.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '235px', height: '80px' }} />
        <Typography variant="h5" sx={{ fontSize: { lg: '24px', xs: '20px' } }} textAlign="center" pb="40px">
          Made with ❤️ by DOT 
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer