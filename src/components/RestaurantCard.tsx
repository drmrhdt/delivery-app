import {
  Container,
  Rating,
  Box,
  Typography,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";

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
                image={`https://course-react.javascript.ru${props.restaurant.headerImage}`}
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
