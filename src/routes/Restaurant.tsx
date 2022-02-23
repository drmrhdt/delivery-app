import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import {
  Box,
  Card,
  Container,
  Tab,
  Tabs,
  CardContent,
  ButtonGroup,
  Button,
} from "@mui/material";

import classes from "./Restaurant.module.scss";

import Banner from "../components/Banner";
import TabPanel from "../components/TabPanel";

// https://course-react.javascript.ru/api/reviews?id=a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2
// https://course-react.javascript.ru/api/users

export default function Restaurant() {
  const [value, setValue] = React.useState(0);
  const [menu, setMenu] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  let { id } = useParams();

  const tabs = ["Menu", "Review"];

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = `https://course-react.javascript.ru/api/dishes?${id}`;
    axios.get(apiUrl).then(({ data }) => {
      setIsLoading(false);
      setMenu(data);
    });
  }, [id]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const a11yProps = (index: any) => {
    return {
      id: `food-tab-${index}`,
      "aria-controls": `food-tabpanel-${index}`,
    };
  };

  return (
    <>
      <Banner
        title={"title"}
        text={"text"}
        imgUrl={"https://course-react.javascript.ru/assets/header-img.jpg"}
      />

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="food tabpanel"
          className="tabs"
        >
          {tabs.map((label, i) => (
            <Tab label={label} {...a11yProps(i)} key={i} />
          ))}
        </Tabs>
      </Box>

      <Container fixed>
        {tabs.map((_, i) => {
          if (i === 0) {
            return (
              <TabPanel value={value} index={i} key={i}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "60%",
                    }}
                  >
                    {menu.map((dish: any, i) => (
                      <Card
                        sx={{ display: "flex", marginBottom: "15px" }}
                        key={i}
                      >
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Box
                              sx={{ display: "flex", flexDirection: "column" }}
                            >
                              <h4 className={classes.product__title}>
                                {dish.name}
                              </h4>
                              <p className={classes.product__description}>
                                description
                              </p>
                              <p className={classes.product__price}>price</p>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "auto",
                              }}
                            >
                              <p className={classes.product__count}>count</p>
                              <Box
                                sx={{ display: "flex", flexDirection: "row" }}
                              >
                                <ButtonGroup
                                  variant="contained"
                                  aria-label="increase and decrease count buttons"
                                >
                                  <Button>+</Button>
                                  <Button>-</Button>
                                </ButtonGroup>
                              </Box>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      width: "40%",
                      marginLeft: "10px",
                      alignSelf: "flex-start",
                      padding: "20px 16px 20px",
                      backgroundColor: "#fff0db",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>
                      <strong>Select a meal from the list</strong>
                    </p>
                  </Box>
                </Box>
              </TabPanel>
            );
          } else if (i === 1) {
            return (
              <TabPanel value={value} index={i} key={i}>
                reviews
              </TabPanel>
            );
          }
        })}
      </Container>
    </>
  );
}
