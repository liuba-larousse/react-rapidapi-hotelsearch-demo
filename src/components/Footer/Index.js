import React from "react";
import s from "./index.module.scss";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <div className={s.container}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        align="center"
      >
        @2021 AirBnb Clone · Privacy ·
        Terms · Sitemap{" "}
      </Typography>
    </div>
  );
}
