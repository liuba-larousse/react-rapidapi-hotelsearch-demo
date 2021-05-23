import React, {
  useEffect,
  useState
} from "react";
import s from "./index.module.scss";
import Banner from "../Banner/Index";
import Card from "../Card/Index";
import Data from "../../database";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Home() {
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
    <div>
      <Banner />
      {loading === true && (
        <div className={s.spinner}>
          <CircularProgress color="secondary" />
        </div>
      )}
      <div className={s.section}>
        {hotels
          ? hotels.map((hotel) => (
              <>
                <li key={hotel.id}>
                  <Card
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
                  />
                </li>
              </>
            ))
          : null}
      </div>
    </div>
  );
}
