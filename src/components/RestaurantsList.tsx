import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import TabPanel from './TabPanel'

import Container from '@mui/material/Container'
import RestaurantCard from './RestaurantCard'

function RestaurantsList(props: any) {
  const [restaurants, setRestaurants] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [value, setValue] = React.useState(0)

  const cuisines = [
    'all',
    'pizza',
    'sushi',
    'vegan',
    'steak',
    'asian',
    'seafood',
    'pasta',
  ]

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  useEffect(() => {
    setIsLoading(true)
    const apiUrl = 'https://course-react.javascript.ru/api/restaurants'
    axios.get(apiUrl).then(({ data }) => {
      setIsLoading(false)
      setRestaurants(data)
    })
  }, [])

  const a11yProps = (index: any) => {
    return {
      id: `food-tab-${index}`,
      'aria-controls': `food-tabpanel-${index}`,
    }
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
            {restaurants.map((restaurant: any, index: number) => {
              if (i > 0 && restaurant.cuisines.includes(cuisines[value])) {
                return (
                  <Link to={`/restaurants/${restaurant.id}`} key={index}>
                    <RestaurantCard restaurant={restaurant}  />
                  </Link>
                )
              } else if (i === 0) {
                return (
                  <Link to={`/restaurants/${restaurant.id}`} key={index}>
                    <RestaurantCard restaurant={restaurant}  />
                  </Link>
                )
              }
            })}
          </TabPanel>
        ))}
      </Container>
    </>
  )
}

export default RestaurantsList
