import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Paper,
  CircularProgress,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaletteIcon from '@mui/icons-material/Palette';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
import { colors } from '../theme/colors';

interface PostcardMetadata {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  date: string;
  theme: string;
  color: string;
  stampDetails: string;
  sender: string;
  status: 'pending' | 'verified';
}

const VerifyPage = () => {
  const [postcards, setPostcards] = useState<PostcardMetadata[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedMetadata, setEditedMetadata] = useState<Partial<PostcardMetadata>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleEdit = (postcard: PostcardMetadata) => {
    setEditingId(postcard.id);
    setEditedMetadata({
      title: postcard.title,
      location: postcard.location,
      date: postcard.date,
      theme: postcard.theme,
      color: postcard.color,
      stampDetails: postcard.stampDetails,
      sender: postcard.sender,
    });
  };

  const handleSave = async (id: string) => {
    setIsSaving(true);
    try {
      // TODO: Implement save functionality with backend
      console.log('Saving changes for postcard:', id);
      console.log('New metadata:', editedMetadata);
      // Simulate save delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEditingId(null);
    } finally {
      setIsSaving(false);
    }
  };

  const handleVerify = async (id: string) => {
    setIsVerifying(true);
    try {
      // TODO: Implement verify functionality with backend
      console.log('Verifying postcard:', id);
      // Simulate verify delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsVerifying(false);
    }
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
          Verify Postcard Metadata
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          Review and verify postcard information
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {postcards.map((postcard) => (
          <Grid item xs={12} key={postcard.id}>
            <Card
              sx={{
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Grid container>
                <Grid item xs={12} md={4}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={postcard.imageUrl}
                    alt={postcard.title}
                    sx={{ objectFit: 'cover' }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    {editingId === postcard.id ? (
                      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                          label="Title"
                          value={editedMetadata.title}
                          onChange={(e) => setEditedMetadata({ ...editedMetadata, title: e.target.value })}
                          fullWidth
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: colors.border.main,
                              },
                              '&:hover fieldset': {
                                borderColor: colors.border.hover,
                              },
                            },
                          }}
                        />
                        <TextField
                          label="Location"
                          value={editedMetadata.location}
                          onChange={(e) => setEditedMetadata({ ...editedMetadata, location: e.target.value })}
                          fullWidth
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: colors.border.main,
                              },
                              '&:hover fieldset': {
                                borderColor: colors.border.hover,
                              },
                            },
                          }}
                        />
                        <TextField
                          label="Date"
                          value={editedMetadata.date}
                          onChange={(e) => setEditedMetadata({ ...editedMetadata, date: e.target.value })}
                          fullWidth
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: colors.border.main,
                              },
                              '&:hover fieldset': {
                                borderColor: colors.border.hover,
                              },
                            },
                          }}
                        />
                        <TextField
                          label="Theme"
                          value={editedMetadata.theme}
                          onChange={(e) => setEditedMetadata({ ...editedMetadata, theme: e.target.value })}
                          fullWidth
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: colors.border.main,
                              },
                              '&:hover fieldset': {
                                borderColor: colors.border.hover,
                              },
                            },
                          }}
                        />
                        <TextField
                          label="Color"
                          value={editedMetadata.color}
                          onChange={(e) => setEditedMetadata({ ...editedMetadata, color: e.target.value })}
                          fullWidth
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: colors.border.main,
                              },
                              '&:hover fieldset': {
                                borderColor: colors.border.hover,
                              },
                            },
                          }}
                        />
                        <TextField
                          label="Stamp Details"
                          value={editedMetadata.stampDetails}
                          onChange={(e) => setEditedMetadata({ ...editedMetadata, stampDetails: e.target.value })}
                          fullWidth
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: colors.border.main,
                              },
                              '&:hover fieldset': {
                                borderColor: colors.border.hover,
                              },
                            },
                          }}
                        />
                        <TextField
                          label="Sender"
                          value={editedMetadata.sender}
                          onChange={(e) => setEditedMetadata({ ...editedMetadata, sender: e.target.value })}
                          fullWidth
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: colors.border.main,
                              },
                              '&:hover fieldset': {
                                borderColor: colors.border.hover,
                              },
                            },
                          }}
                        />
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                          <Button
                            variant="contained"
                            onClick={() => handleSave(postcard.id)}
                            disabled={isSaving}
                            sx={{
                              backgroundColor: colors.primary.main,
                              '&:hover': {
                                backgroundColor: colors.primary.dark,
                              },
                            }}
                            startIcon={isSaving ? <CircularProgress size={20} /> : null}
                          >
                            {isSaving ? 'Saving...' : 'Save Changes'}
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => setEditingId(null)}
                            disabled={isSaving}
                            sx={{
                              borderColor: colors.border.main,
                              color: colors.primary.main,
                              '&:hover': {
                                borderColor: colors.border.hover,
                                backgroundColor: 'rgba(76, 175, 80, 0.04)',
                              },
                            }}
                          >
                            Cancel
                          </Button>
                        </Box>
                      </Box>
                    ) : (
                      <>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                          {postcard.title}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          <Chip
                            label={postcard.status === 'verified' ? 'Verified' : 'Pending'}
                            color={postcard.status === 'verified' ? 'success' : 'warning'}
                            size="small"
                            sx={{ mr: 1 }}
                          />
                          <Chip
                            label={postcard.theme}
                            size="small"
                            sx={{ mr: 1, backgroundColor: colors.background.main, color: colors.text.primary }}
                            icon={<PaletteIcon sx={{ color: colors.primary.main }} />}
                          />
                          <Chip
                            label={postcard.color}
                            size="small"
                            sx={{ backgroundColor: colors.background.main, color: colors.text.primary }}
                            icon={<LocalOfferIcon sx={{ color: colors.primary.main }} />}
                          />
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <LocationOnIcon sx={{ mr: 1, color: colors.primary.main }} />
                              <Typography variant="body1">
                                {postcard.location}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <CalendarTodayIcon sx={{ mr: 1, color: colors.primary.main }} />
                              <Typography variant="body1">
                                {postcard.date}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <LocalOfferIcon sx={{ mr: 1, color: colors.primary.main }} />
                              <Typography variant="body1">
                                {postcard.stampDetails}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <PersonIcon sx={{ mr: 1, color: colors.primary.main }} />
                              <Typography variant="body1">
                                {postcard.sender}
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                          <Button
                            variant="outlined"
                            startIcon={<EditIcon />}
                            onClick={() => handleEdit(postcard)}
                            sx={{
                              borderColor: colors.border.main,
                              color: colors.primary.main,
                              '&:hover': {
                                borderColor: colors.border.hover,
                                backgroundColor: 'rgba(76, 175, 80, 0.04)',
                              },
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => handleVerify(postcard.id)}
                            disabled={isVerifying}
                            sx={{
                              backgroundColor: colors.primary.main,
                              '&:hover': {
                                backgroundColor: colors.primary.dark,
                              },
                            }}
                          >
                            {isVerifying ? 'Verifying...' : 'Verify'}
                          </Button>
                        </Box>
                      </>
                    )}
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VerifyPage;
