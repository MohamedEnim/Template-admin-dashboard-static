import React from "react";
import "./Navbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { imageUserUrl } from "./../../avatar";
import Paper from "@mui/material/Paper";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Paper
        elevation={3}
        square
        style={{ width: "100% !important", height: "100% !important" }}
      >
        <div className="navbar__wrapper">
          <div className="navbar__wrapperLeft">
            <span className="navbar__wrapperLeftLogo">Admin Dashboard</span>
          </div>
          <div className="navbar__wrapperRight">
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
            <IconButton>
              <LanguageIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
            <IconButton>
              <Avatar alt="Cindy Baker" src={imageUserUrl} />
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
};
