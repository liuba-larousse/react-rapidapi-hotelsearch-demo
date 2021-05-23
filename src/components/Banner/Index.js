import React, { useState } from "react";
import s from "./index.module.scss";
import { Button } from "@material-ui/core";
import Search from "./../Search/Index";
import { useHistory } from "react-router-dom";

export default function Banner() {
  const history = useHistory();

  const [
    showSearch,
    setShowSearch
  ] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.search}>
        <Button
          onClick={() =>
            setShowSearch(!showSearch)
          }
          className={s.button}
        >
          {showSearch !== true
            ? "Search Dates"
            : "Close"}
        </Button>

        {showSearch && <Search />}
      </div>
      <div className={s.info}>
        <h1>
          Be fearless in the pursuit of
          what sets your soul on fire.
        </h1>
        <h5>
          Traveling – it leaves you
          speechless, then turns you
          into a storyteller.
        </h5>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            history.push("./search")
          }
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}
