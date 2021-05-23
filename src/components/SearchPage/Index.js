import React, {
  useEffect,
  useState
} from "react";
import s from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchResult from "./../SearchResult/Index";

import Data from "../../database";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SearchPage() {
  const [
    loading,
    setLoading
  ] = useState(false);

  const hotels = Data();

  useEffect(() => {
    hotels.length > 0
      ? setLoading(false)
      : setLoading(true);
  });

  return (
    <>
      <div className={s.info}>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
        >
          {" "}
          300+ stays
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
          component="h2"
        >
          Stays nearby
        </Typography>
        <div className={s.buttonBox}>
          <Button className={s.button}>
            Cancellation Flexibility
          </Button>
          <Button className={s.button}>
            Type of place
          </Button>
          <Button className={s.button}>
            Price
          </Button>
          <Button className={s.button}>
            Instant book
          </Button>
        </div>
        {loading === true && (
          <div className={s.spinner}>
            <CircularProgress color="secondary" />
          </div>
        )}
        {hotels
          ? hotels.map((hotel) => (
              <>
                <li key={hotel.id}>
                  <SearchResult
                    title={hotel.name}
                    price={
                      hotel.ratePlan
                        .price.current
                    }
                    cityCenterMiles={
                      hotel.landmarks[0]
                        .distance
                    }
                    timeSquareMilse={
                      hotel.landmarks[1]
                        .distance
                    }
                    src={
                      hotel
                        .optimizedThumbUrls
                        .srpDesktop
                    }
                    rating={
                      hotel.guestReviews
                        .rating
                    }
                    reviews={
                      hotel.guestReviews
                        .total
                    }
                  />
                </li>
              </>
            ))
          : null}
      </div>
    </>
  );
}
