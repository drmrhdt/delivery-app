import React from 'react'
import classes from './Banner.module.scss'

export default function Banner() {
    return (
        <div className={classes.banner}>
        <div className={classes.banner__container}>
          <h1 className={classes.banner__logo}>Order Food</h1>
          <b>From 175 Restaurants</b>
        </div>
      </div>
    )
}
