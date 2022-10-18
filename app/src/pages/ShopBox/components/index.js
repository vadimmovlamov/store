import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const PokemonCard = ({ name, image, handleClick }) => {
  return (
    <div>
      <div>
        <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Button>Buy Pokemon</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PokemonCard;
