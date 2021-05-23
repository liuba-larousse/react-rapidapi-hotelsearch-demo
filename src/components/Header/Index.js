import React from "react";
import s from "./index.module.scss";
import {
  IconButton,
  InputBase,
  Avatar
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={s.container}>
      <Link to="/">
        <img
          className={s.icon}
          src="https://pbs.twimg.com/profile_images/1309498441232461825/3sW2bAxK_400x400.jpg"
          alt=""
        />
      </Link>

      <form className={s.search}>
        <InputBase
          type="text"
          placeholder="Search "
          inputProps={{
            "aria-label":
              "search airbnb"
          }}
        />
        <IconButton
          type="submit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </form>

      <div className={s.right}>
        <p>Log In</p>
        <ExpandMoreIcon />
        <LanguageIcon />
        <Avatar />
      </div>
    </div>
  );
}
