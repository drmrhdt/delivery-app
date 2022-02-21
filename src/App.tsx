import React, { useEffect } from "react";

import axios from "axios";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./components/TabPanel";
import logo from "./assets/logo.svg";
import "./App.scss";

import Container from "@mui/material/Container";
import RestaurantCard from "./components/RestaurantCard";

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
                  <RestaurantCard restaurant={restaurant}></RestaurantCard>
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
