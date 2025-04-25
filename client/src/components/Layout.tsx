import { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" elevation={1} sx={{ backgroundColor: '#4caf50' }}>
        <Box sx={{ width: '100%' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px'
                }}
              >
                PostaVista
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  sx={{
                    fontWeight: isActive('/') ? 'bold' : 'normal',
                    borderBottom: isActive('/') ? '2px solid white' : 'none',
                    color: 'white',
                  }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/search"
                  sx={{
                    fontWeight: isActive('/search') ? 'bold' : 'normal',
                    borderBottom: isActive('/search') ? '2px solid white' : 'none',
                    color: 'white',
                  }}
                >
                  Search
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/upload"
                  sx={{
                    fontWeight: isActive('/upload') ? 'bold' : 'normal',
                    borderBottom: isActive('/upload') ? '2px solid white' : 'none',
                    color: 'white',
                  }}
                >
                  Upload
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/verify"
                  sx={{
                    fontWeight: isActive('/verify') ? 'bold' : 'normal',
                    borderBottom: isActive('/verify') ? '2px solid white' : 'none',
                    color: 'white',
                  }}
                >
                  Verify
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) => theme.palette.grey[100]
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} PostaVista - Your AI-powered postcard management platform
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
