import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Box, Container, Tab, Tabs } from '@mui/material'

import Banner from '../components/Banner'
import TabPanel from '../components/TabPanel'
import axios from 'axios'

// https://course-react.javascript.ru/api/reviews?id=a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2
// https://course-react.javascript.ru/api/users

export default function Restaurant() {
  const [value, setValue] = React.useState(0)
  const [menu, setMenu] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  let { id } = useParams()

  const tabs = ['Menu', 'Review']

  useEffect(() => {
    setIsLoading(true)
    const apiUrl = `https://course-react.javascript.ru/api/dishes?${id}`
    axios.get(apiUrl).then(({ data }) => {
      setIsLoading(false)
      setMenu(data)
    })
  }, [id])

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  const a11yProps = (index: any) => {
    return {
      id: `food-tab-${index}`,
      'aria-controls': `food-tabpanel-${index}`,
    }
  }

  return (
    <>
      <Banner
        title={'title'}
        text={'text'}
        imgUrl={'https://course-react.javascript.ru/assets/header-img.jpg'}
      />

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
                {menu.map((dish: any, i) => (
                  <div key={i}>{dish.name}</div>
                ))}
              </TabPanel>
            )
          } else if (i === 1) {
            return (
              <TabPanel value={value} index={i} key={i}>
                reviews
              </TabPanel>
            )
          }
        })}
      </Container>
    </>
  )
}
