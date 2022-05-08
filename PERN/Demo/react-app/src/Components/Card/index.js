import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@material-ui/core/Container';
import bookImage from '../../Images/book.jpg';
import HeaderComponent from '../Header';

const BookImageCard = () => {
  const Style = {
    card: { maxWidth: 345, margin: 5 },
    cardContent: { bgcolor: '#c5cae9' },
    cardActions: { bgcolor: '#c5cae9' },
  };
  return (
    <Container>
      <Card sx={Style.card}>
        <CardMedia component="img" alt="some image" height="140" image={bookImage} />
        <CardContent sx={Style.cardContent}>
          <HeaderComponent gutterBottom variant="h5" component="div">
            Book
          </HeaderComponent>
          <HeaderComponent variant="body2" color="text.primary">
            A book is a medium for recording information in the form of writing or images, typically composed of many
            pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.
          </HeaderComponent>
        </CardContent>
        <CardActions sx={Style.cardActions}>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default BookImageCard;
