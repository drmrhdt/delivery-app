import React, { useEffect } from "react";

import axios from "axios";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./components/TabPanel";
import logo from "./assets/logo.svg";
import "./App.scss";

import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";

function App() {
  const [restaurants, setRestaurants] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const cuisines = [
    "all",
    "pizza",
    "sushi",
    "vegan",
    "steak",
    "asian",
    "seafood",
    "pasta",
  ];

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = "https://course-react.javascript.ru/api/restaurants";
    axios.get(apiUrl).then(({ data }) => {
      setIsLoading(false);
      setRestaurants(data);
    });
  }, []);

  const a11yProps = (index: any) => {
    return {
      id: `food-tab-${index}`,
      "aria-controls": `food-tabpanel-${index}`,
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header__container">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
      </header>
      <div className="banner">
        <div className="banner__container">
          <h1 className="banner__logo">Order Food</h1>
          <b>From 175 Restaurants</b>
        </div>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="food tabpanel"
          className="tabs"
        >
          {cuisines.map((cuisine, i) => (
            <Tab label={cuisine} {...a11yProps(i)} key={i} />
          ))}
        </Tabs>
      </Box>

      <Container fixed>
        {cuisines.map((_, i) => (
          <TabPanel value={value} index={i} key={i}>
            {restaurants.map((restaurant: any) => {
              if (restaurant.cuisines.includes(cuisines[value])) {
                return (
                  <Card sx={{ display: "flex",  marginBottom: '15px' }}>
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
                            sx={{ display: "flex", flexDirection: "column", marginLeft: '10px' }}
                          >
                            <Typography component="div" variant="h5">
                              {restaurant.name}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                            >
                              {restaurant.cuisines.map(
                                (cuisine: any, i: number) =>
                                  cuisine +
                                  (i === restaurant.cuisines.length - 1
                                    ? ""
                                    : ", ")
                              )}
                            </Typography>
                            <Rating
                              name="read-only"
                              value={restaurant.averageRating}
                              readOnly
                            />
                          </Box>
                        </Box>
                      </CardContent>
                    </Box>
                  </Card>
                );
              }
            })}
          </TabPanel>
        ))}
      </Container>
    </div>
  );
}

export default App;
