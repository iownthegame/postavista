import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Paper,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { colors } from '../theme/colors';

interface Postcard {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  date: string;
}

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [postcards, setPostcards] = useState<Postcard[]>([]);

  const handleSearch = async () => {
    // TODO: Implement search functionality with backend
    console.log('Searching for:', searchQuery);
  };

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          background: colors.background.main,
          color: colors.text.primary,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(${colors.dotPattern.color} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            opacity: colors.dotPattern.opacity,
            pointerEvents: 'none',
          },
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Search Postcards
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9, mb: 3 }}>
          Find postcards using keywords, location, or date
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by keywords, location, or date..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                backgroundColor: colors.background.paper,
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.border.main,
                  },
                  '&:hover fieldset': {
                    borderColor: colors.border.hover,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: colors.primary.main }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSearch}
              sx={{
                height: '56px',
                backgroundColor: colors.primary.main,
                color: colors.background.paper,
                '&:hover': {
                  backgroundColor: colors.primary.dark,
                },
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {postcards.map((postcard) => (
          <Grid item xs={12} sm={6} md={4} key={postcard.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={postcard.imageUrl}
                alt={postcard.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {postcard.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {postcard.location}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarTodayIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {postcard.date}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchPage;
