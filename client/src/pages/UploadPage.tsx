import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  CircularProgress,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { colors } from '../theme/colors';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [metadata, setMetadata] = useState({
    title: '',
    location: '',
    date: '',
    description: '',
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFile(file);
      setPreview(URL.createObjectURL(file));
    },
  });

  const handleMetadataChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMetadata({
      ...metadata,
      [field]: event.target.value,
    });
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);

    try {
      // TODO: Implement upload functionality with backend
      console.log('Uploading file:', file);
      console.log('Metadata:', metadata);
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setIsUploading(false);
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
          Upload Postcard
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          Add a new postcard to your collection
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            {...getRootProps()}
            sx={{
              p: 3,
              textAlign: 'center',
              border: '2px dashed',
              borderColor: isDragActive ? colors.border.main : 'grey.300',
              backgroundColor: isDragActive ? `rgba(76, 175, 80, 0.04)` : colors.background.paper,
              cursor: 'pointer',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <input {...getInputProps()} />
            {preview ? (
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={preview}
                  alt="Preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    maxHeight: '400px',
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    backgroundColor: colors.primary.main,
                    '&:hover': {
                      backgroundColor: colors.primary.dark,
                    },
                  }}
                  startIcon={<PhotoCameraIcon />}
                >
                  Change Image
                </Button>
              </Box>
            ) : (
              <>
                <CloudUploadIcon sx={{ fontSize: 64, color: colors.primary.main, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {isDragActive
                    ? 'Drop the postcard image here'
                    : 'Drag and drop a postcard image, or click to select'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Supported formats: JPEG, JPG, PNG
                </Typography>
              </>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Title"
                value={metadata.title}
                onChange={handleMetadataChange('title')}
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
                value={metadata.location}
                onChange={handleMetadataChange('location')}
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
                type="date"
                value={metadata.date}
                onChange={handleMetadataChange('date')}
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
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
                label="Description"
                value={metadata.description}
                onChange={handleMetadataChange('description')}
                fullWidth
                multiline
                rows={4}
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
              <Button
                variant="contained"
                onClick={handleUpload}
                disabled={!file || isUploading}
                sx={{
                  mt: 2,
                  backgroundColor: colors.primary.main,
                  '&:hover': {
                    backgroundColor: colors.primary.dark,
                  },
                }}
                startIcon={isUploading ? <CircularProgress size={20} /> : null}
              >
                {isUploading ? 'Uploading...' : 'Upload Postcard'}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UploadPage;
