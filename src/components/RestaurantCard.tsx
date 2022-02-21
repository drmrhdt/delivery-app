import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function RestaurantCard(props: any) {
  return (
    <Container fixed>
      <Card sx={{ display: "flex", marginBottom: "15px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://www.globalblue.com/destinations/russia/moscow/article705149.ece/BINARY/yoko_restaurant_teaser.jpg"
                alt="Live from space album cover"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <Typography component="div" variant="h5">
                  {props.restaurant.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {props.restaurant.cuisines.map(
                    (cuisine: any, i: number) =>
                      cuisine +
                      (i === props.restaurant.cuisines.length - 1 ? "" : ", ")
                  )}
                </Typography>
                <Rating
                  name="read-only"
                  value={props.restaurant.averageRating}
                  readOnly
                />
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
}

export default RestaurantCard;
