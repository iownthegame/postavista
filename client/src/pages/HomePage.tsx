import { Typography, Box, Grid, Paper, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Search Postcards',
      description: 'Find postcards using text prompts or by uploading an image.',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/search'),
      buttonText: 'Search Now'
    },
    {
      title: 'Upload Postcard',
      description: 'Add postcards by taking a photo or selecting from your gallery.',
      icon: <CloudUploadIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/upload'),
      buttonText: 'Upload Postcard'
    },
    {
      title: 'Verify Metadata',
      description: 'Correct or confirm metadata for accuracy.',
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/verify'),
      buttonText: 'Verify Now'
    },
  ];

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box
        sx={{
          textAlign: 'center',
          mb: { xs: 4, sm: 6, md: 8 },
          background: `
            #e8f5e9
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234caf50' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")
          `,
          color: '#1b5e20',
          py: { xs: 4, sm: 6, md: 8 },
          width: '100%',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          borderBottom: '2px solid #4caf50',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              letterSpacing: '0.5px',
            }}
          >
            Welcome to PostaVista
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.9,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              px: { xs: 2, sm: 3 },
              fontStyle: 'italic',
            }}
          >
            Your AI-powered postcard management platform for searching, uploading, and verifying postcards
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: '100%', py: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
          >
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={3}
                  onClick={feature.action}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    backgroundColor: '#f1f8e9',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                      backgroundColor: '#e8f5e9',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: '#4caf50',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1b5e20' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3, color: '#2e7d32' }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
