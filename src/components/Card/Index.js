import React from "react";
// import s from "./index.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 10,
    maxWidth: 345,
    transition:
      "transform 0.15s ease-in-out",
    "&:hover": {
      transform:
        "scale3d(1.05, 1.05, 1)"
    }
  }
});

export default function RoomCard({
  title,
  src,
  price,
  cityCenterMiles,
  timeSquareMilse
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {cityCenterMiles} miles from
            City center and{" "}
            {timeSquareMilse} miles from
            timeSquare
          </Typography>
          <Typography
            variant="h5"
            component="p"
          >
            {price} /night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// export default function Card({
//   src,
//   title,
//   desc,
//   price
// }) {
//   return (
//     <div className={s.container}>
//       <img src={src} alt="" />
//       <div className={s.info}>
//         <span className={s.title}>
//           {title}
//         </span>
//         <span className={s.desc}>
//           {desc}
//         </span>
//         <span className={s.price}>
//           {price}
//         </span>
//       </div>
//     </div>
//   );
// }
