import React from "react";
import "./WidgetUser.css";

import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetUser = ({ imageUrl, username, userTitle, right, update }) => {
  return (
    <div className={`widgetUser ${right && "widgetUser--option"}`}>
      <div className="widgetUser__wrapper">
        <Avatar alt="Cindy Baker" src={imageUrl} />
        <div className="widgetUser__info">
          <span className="widgetUser__infoName">{username}</span>
          {(!right || update) && (
            <span className="widgetUser__infoTitle">{userTitle}</span>
          )}
        </div>
        {!right && (
          <Button
            variant="contained"
            startIcon={<VisibilityIcon />}
            className="widgetUser__displayBn"
          >
            Display
          </Button>
        )}
      </div>
    </div>
  );
};

export default WidgetUser;
