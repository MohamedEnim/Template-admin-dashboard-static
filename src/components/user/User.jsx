import React from "react";
import { imageUserUrl } from "../../avatar";
import WidgetUser from "../widgetLeft/WidgetUser";
import "./User.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import InputField from "./../../common/InputField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Option from "../../common/Option";
import { useHistory } from "react-router";

const Input = styled("input")({
  display: "none",
});
const User = () => {
  const history = useHistory();
  const handleCreateUser = () => {
    history.push("/createUser");
  };
  return (
    <div className="user">
      <div className="user__header">
        <h2 className="userHeaderTitle">Edit User</h2>
        <Button variant="contained" onClick={() => handleCreateUser()}>
          Create
        </Button>
      </div>

      <div className="user__feed">
        <div className="user__propile">
          <Card style={{ height: "100%" }}>
            <CardContent>
              <div className="user__propileWidget">
                <WidgetUser
                  imageUrl={imageUserUrl}
                  username="Atlas Selcan"
                  userTitle="Software Engenner"
                  right
                  update
                />
              </div>

              <div className="user__profileDetails">
                <h3 className="user__profileDetailsTitle">Account Details</h3>
                <div className="user__profileDetailsGroup">
                  <Option Icon={PermIdentityIcon} label="annabeck99" />
                  <Option Icon={CalendarTodayIcon} label="10.12.1999" />
                </div>
              </div>

              <div className="user__profileContacts">
                <h3 className="user__profileContactsTitle">Contact</h3>
                <div className="user__profileContactsGroup">
                  <Option Icon={PhoneAndroidIcon} label="+1 911 255 487" />
                  <Option Icon={EmailIcon} label="annabeck@gmail.com" />
                  <Option Icon={GpsNotFixedIcon} label="New York | USA" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="user__update">
          <Card>
            <CardContent>
              <h3 className="user__updateTitle">Edit</h3>
              <div className="user__updateWrapper">
                <div className="user__updateTitleLeft">
                  <div className="user__updateGroupe">
                    <InputField label="Username" placeholder="annabeck99" />
                    <InputField
                      label="Full name"
                      placeholder="Anna Belckelson"
                    />
                    <InputField label="Email" placeholder="anna@gmail.com" />
                    <InputField label="Phone" placeholder="+1 589 123 456" />
                    <InputField label="Adress" placeholder="New York | USA" />
                  </div>
                </div>
                <div className="user__updateTitleRight">
                  <div className="user__updateTitleRightTop">
                    <img src={imageUserUrl} alt="" />
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </div>
                  <div className="user__updateTitleRightBottom">
                    <Button variant="contained">Update</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default User;
