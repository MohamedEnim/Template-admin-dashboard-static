import React from "react";
import "./CreateUser.css";
import InputField from "./../../common/InputField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

const CreateUser = () => {
  return (
    <div className="createUser">
      <h2 className="createUser__title">Create User</h2>
      <form>
        <div className="user__updateGroup">
          <div className="user__updateGroupLeft">
            <InputField label="Username" placeholder="annabeck99" border />
            <InputField label="Email" placeholder="anna@gmail.com" border />
            <InputField label="Phone" placeholder="+1 589 123 456" border />

            <div className="createUser__radio">
              <label htmlFor="">Gender</label>
              <RadioGroup row aria-label="gender" name="radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </div>
          </div>
          <div className="user__updateGroupRight">
            <InputField
              label="Full name"
              placeholder="Anna Belckelson"
              border
            />
            <InputField label="Password" placeholder="password" border />
            <InputField label="Adress" placeholder="New York | USA" border />

            <div className="createUser__select">
              <label htmlFor="">Active</label>
              <select name="" id="" className="createUser__selectSel">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div className="createUser__botton">
                <Button variant="contained">Create</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
