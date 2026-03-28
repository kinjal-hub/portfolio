import React from 'react';
import { Container, Box, useTheme, useMediaQuery } from '@mui/material';

const Container1 = ({ content, backgroundColor = 'white', height = 'auto', width = '100%',title, ...otherProps  }) => {
  const theme = useTheme();

  // Define responsive padding and max-width based on breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 960px
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // > 960px

  let containerProps = {};
  if (isMobile) {
    containerProps = { maxWidth: '100%', sx: { px: 2 } }; // Small padding for mobile
  } else if (isTablet) {
    containerProps = { maxWidth: '90%', sx: { px: 4 } }; // Medium padding for tablet
  } else if (isDesktop) {
    containerProps = { maxWidth: 'lg', sx: { px: 6 } }; // Standard padding and large max-width for desktop
  }

  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        title: title,
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center',    // Center content vertically (if height allows)
        ...otherProps // Allow overriding default styles and adding other props
      }}
      
    >
      <Container {...containerProps}>
        {content}
      </Container>
    </Box>
  );
};

export default Container1;