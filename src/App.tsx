import React, { useEffect } from "react";

import axios from "axios";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./components/TabPanel";
import logo from "./assets/logo.svg";
import "./App.scss";

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
    console.log(newValue)
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
          {
            cuisines.map((cuisine, i) => <Tab label={cuisine} {...a11yProps(i)} key={i} />)
          }
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default App;
