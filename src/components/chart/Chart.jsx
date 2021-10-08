import React from "react";
import "./Chart.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, grid, dataKeyX, dataKeyY, dataKeyVal, type }) => {
  return (
    <div className="chart">
      <Card style={{ height: "100%" }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{ marginBottom: "15px" }}
          >
            {title}
          </Typography>

          <ResponsiveContainer
            width="100%"
            aspect={`${type ? 4 / 1.5 : 4 / 1}`}
          >
            <LineChart data={data}>
              {grid && <CartesianGrid strokeDasharray="5 3" stroke="#e0dfdf" />}
              <XAxis dataKey={dataKeyX} />
              {dataKeyY && <YAxis dataKey={dataKeyY} />}
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={dataKeyVal}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chart;
