import React from "react";
import "./Featured.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Featured = ({ title, money, moneyRate, desc }) => {
  return (
    <div className="featured">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <div className="featured__moneyWrapper">
            <span className="featured__moneyWrapperMoney">${money}</span>
            <span className="featured__moneyWrapperRate">
              {moneyRate > 0 ? (
                <>
                  {moneyRate}
                  +<ArrowUpwardIcon className="positive" />
                </>
              ) : (
                <>
                  {moneyRate}
                  -<ArrowDownwardIcon className="negative" />
                </>
              )}
            </span>
          </div>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Featured;
