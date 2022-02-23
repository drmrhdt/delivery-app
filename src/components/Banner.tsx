import React from 'react'
import classes from './Banner.module.scss'

export default function Banner({title, text}: {title: string, text: string}) {
    return (
        <div className={classes.banner}>
        <div className={classes.banner__container}>
          <h1 className={classes.banner__logo}>{title}</h1>
          <b>{text}</b>
        </div>
      </div>
    )
}
