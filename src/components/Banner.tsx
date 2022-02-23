import React from "react";
import classes from "./Banner.module.scss";

export default function Banner({
  title,
  text,
  imgUrl,
}: {
  title: string;
  text: string;
  imgUrl: string;
}) {
  const bgImage = { backgroundImage: "url(" + imgUrl + ")" };

  return (
    <div className={classes.banner} style={bgImage}>
      <div className={classes.banner__container}>
        <h1 className={classes.banner__logo}>{title}</h1>
        <b>{text}</b>
      </div>
    </div>
  );
}
