import React, { useState, useEffect } from 'react';
import {
 Container,
 Box,
 Typography,
 Grid,
 Card,
 CardContent,
 Button,
 Paper,
 Alert,
 Stack,
 useMediaQuery,
 useTheme
} from '@mui/material';
import { Phone, Tablet, Computer } from '@mui/icons-material';

export default function ResponsiveDesignDemo() {
 // Get the current screen width to show it to the user
 const [screenWidth, setScreenWidth] = useState(window.innerWidth);

 // MUI theme gives us access to breakpoints
 const theme = useTheme();

 // useMediaQuery is a Material UI hook that checks if screen matches certain size
 // These will be true/false based on screen size
 const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // less than 600px
 const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px to 900px
 const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // 900px and above
 // Update screen width when window is resized
 useEffect(() => {
 const handleResize = () => {
 setScreenWidth(window.innerWidth);
 };

 window.addEventListener('resize', handleResize);

 // Cleanup: remove the event listener when component unmounts
 return () => window.removeEventListener('resize', handleResize);
 }, []);
 return (
 <Container maxWidth="lg" sx={{ py: 4 }}>
 {/*
 SECTION 1: Screen Size Indicator
 This shows what device size we're currently viewing
 */}
 <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'primary.light' }}>
 <Typography variant="h4" gutterBottom color="white">
 Responsive Design Tutorial
 </Typography>
 <Typography variant="h6" color="white">
 Current Screen Width: {screenWidth}px
 </Typography>

 {/* Show different icons based on screen size */}
 <Box sx={{ display: 'flex', gap: 2, mt: 2, alignItems: 'center' }}>
 {isMobile && (
 <>
 <Phone sx={{ fontSize: 40, color: 'white' }} />
 <Typography variant="h5" color="white">Mobile View (less than 600px)</Typography>
 </>
 )}
 {isTablet && (
 <>
 <Tablet sx={{ fontSize: 40, color: 'white' }} />
 <Typography variant="h5" color="white">Tablet View (600px - 900px)</Typography>
 </>
 )}
 {isDesktop && (
 <>
 <Computer sx={{ fontSize: 40, color: 'white' }} />
 <Typography variant="h5" color="white">Desktop View (900px+)</Typography>
 </>
 )}
 </Box>
 
 </Paper>
 {/*
 SECTION 2: What is Responsive Design?
 */}
 <Alert severity="info" sx={{ mb: 4 }}>
 <Typography variant="h6" gutterBottom>
 What is Responsive Design?
 </Typography>
 <Typography>
 Responsive design means your website looks good and works well on ALL devices -
 phones, tablets, and desktop computers. Try resizing your browser window to see
 the changes below!
 </Typography>
 </Alert>
 {/*
 SECTION 3: Material UI Grid System
 Grid uses 12 columns. You specify how many columns each item takes
 xs = extra small (mobile)
 sm = small (tablet)
 md = medium (small desktop)
 lg = large (large desktop)
 */}
 <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
 Example 1: Responsive Grid (12 Column System)
 </Typography>
 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
 Each row has 12 columns. Below, on mobile each card takes all 12 columns (full width) on tablet each takes 6 columns (half width), and on desktop each takes 4 columns thi </Typography>

 <Grid container spacing={2} sx={{ mb: 4 }}>
 {/*
 xs={12} = On mobile (extra small), take all 12 columns (full width)
 sm={6} = On tablet (small), take 6 columns (half width)
 md={4} = On desktop (medium+), take 4 columns (one third width)
 */}
 <Grid item xs={12} sm={6} md={4}>
 <Card sx={{ bgcolor: 'error.light' }}>
 <CardContent>
 <Typography variant="h6" color="white">Card 1</Typography>
 <Typography color="white">
 Mobile: Full width (12/12)
 <br />
 Tablet: Half width (6/12)
 <br />
 Desktop: Third width (4/12)
 </Typography>
 </CardContent>
 </Card>
 </Grid>
 <Grid item xs={12} sm={6} md={4}>
 <Card sx={{ bgcolor: 'success.light' }}>
 <CardContent>
 <Typography variant="h6" color="white">Card 2</Typography>
 <Typography color="white">
 Mobile: Full width (12/12)
 <br />
 Tablet: Half width (6/12)
 <br />
 Desktop: Third width (4/12)
 </Typography>
 </CardContent>
 </Card>
 </Grid>
 <Grid item xs={12} sm={6} md={4}>
 <Card sx={{ bgcolor: 'warning.light' }}>
 <CardContent>
 <Typography variant="h6" color="white">Card 3</Typography>
 <Typography color="white">
 Mobile: Full width (12/12)
 <br />
 Tablet: Half width (6/12)
 <br />
 Desktop: Third width (4/12)
 </Typography>
 </CardContent>
 </Card>
 </Grid>
 </Grid>
 {/*
 SECTION 4: Hiding/Showing content based on screen size
 sx={{ display: { xs: 'none', md: 'block' } }} means:
 - Hide on mobile (xs: 'none')
 - Show on desktop (md: 'block')
 */}
 <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
 Example 2: Show/Hide Content by Screen Size
 </Typography>

 {/* Only visible on MOBILE */}
 <Box
 sx={{
 display: { xs: 'block', md: 'none' }, // Show on mobile, hide on desktop
 mb: 2
 }}
 >
 <Alert severity="success">
 This message ONLY appears on MOBILE screens (less than 900px)
 </Alert>
 </Box>
 {/* Only visible on DESKTOP */}
 <Box
 sx={{
 display: { xs: 'none', md: 'block' }, // Hide on mobile, show on desktop
 mb: 2
 }}
 >
 <Alert severity="info">
 This message ONLY appears on DESKTOP screens (900px and above)
 </Alert>
 </Box>
 {/*
 SECTION 5: Responsive Typography
 Different font sizes for different screens
 */}
 <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
 Example 3: Responsive Font Sizes
 </Typography>

 <Paper sx={{ p: 3, mb: 4, bgcolor: 'secondary.light' }}>
 <Typography
 sx={{
 fontSize: {
 xs: '1rem', // Mobile: 16px
 sm: '1.5rem', // Tablet: 24px
 md: '2rem' // Desktop: 32px
 },
 color: 'white'
 }}
 >
 This text changes size! On mobile it's small (16px), on tablet it's medium (24px),
 and on desktop it's large (32px).
 </Typography>
 </Paper>
 {/*
 SECTION 6: Responsive Spacing (Padding/Margin)
 Different spacing for different screens
 */}
 <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
 Example 4: Responsive Spacing
 </Typography>

 <Paper
 sx={{
 p: { xs: 1, sm: 2, md: 4 }, // Padding: 8px mobile, 16px tablet, 32px desktop
 mb: 4,
 bgcolor: 'info.light'
 }}
 >
 <Typography color="white">
 This box has different padding on different screens:
 <br />
 • Mobile: Small padding (8px)
 <br />
 • Tablet: Medium padding (16px)
 <br />
 • Desktop: Large padding (32px)
 </Typography>
 </Paper>
 {/*
 SECTION 7: Using useMediaQuery hook
 You can use JavaScript logic based on screen size
 */}
 <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
 Example 5: Conditional Rendering with useMediaQuery
 </Typography>

 <Paper sx={{ p: 3, mb: 4 }}>
 {isMobile && (
 <Alert severity="warning" sx={{ mb: 2 }}>
 You're on mobile! Showing compact view.
 </Alert>
 )}

 <Stack
 direction={isMobile ? 'column' : 'row'} // Stack vertically on mobile, horizontally spacing={2}
 >
 <Button variant="contained" fullWidth={isMobile}>
 Button 1
 </Button>
 <Button variant="contained" fullWidth={isMobile}>
 Button 2
 </Button>
 <Button variant="contained" fullWidth={isMobile}>
 Button 3
 </Button>
 </Stack>

 <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
 {isMobile
 ? "On mobile: Buttons stack vertically and take full width"
 : "On desktop: Buttons are side-by-side"}
 </Typography>
 </Paper>
 {/*
 SECTION 8: Material UI Breakpoints Reference
 */}
 <Paper sx={{ p: 3, bgcolor: 'grey.100' }}>
 <Typography variant="h6" gutterBottom>
 Material UI Breakpoints Cheat Sheet:
 </Typography>
 <Typography variant="body2" component="div">
 • <strong>xs</strong> (extra-small): 0px and up - Mobile phones
 <br />
 • <strong>sm</strong> (small): 600px and up - Tablets
 <br />
 • <strong>md</strong> (medium): 900px and up - Small laptops
 <br />
 • <strong>lg</strong> (large): 1200px and up - Desktops
 <br />
 • <strong>xl</strong> (extra-large): 1536px and up - Large desktops
 </Typography>

 <Alert severity="success" sx={{ mt: 2 }}>
 <strong>Pro Tip:</strong> Always design for mobile FIRST, then add styles for large This is called "Mobile-First Design"!
 </Alert>
 </Paper>
 {/*
 SECTION 9: Practice Exercise
 */}
 <Paper sx={{ p: 3, mt: 4, bgcolor: 'warning.light' }}>
 <Typography variant="h6" gutterBottom color="white">
 Try This Yourself:
 </Typography>
 <Typography color="white">
 1. Resize your browser window and watch how everything changes!
 <br />
 2. Open developer tools (F12) and use the device toolbar to simulate different devi <br />
 3. Try creating a Grid with cards that show 1 per row on mobile, 2 per row on table and 3 per row on desktop
 </Typography>
 </Paper>
 </Container>
 );
};