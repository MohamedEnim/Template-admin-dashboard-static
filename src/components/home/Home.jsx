import React from "react";
import Chart from "../chart/Chart";
import Featured from "../featured/Featured";
import "./Home.css";
import { userData } from "./../../userData";
import WidgetLf from "../widgetLeft/WidgetLf";
import WidgetR from "./../widgetRight/WidgetR";

const Home = () => {
  return (
    <div className="home">
      <div className="home__featuredInfo">
        <Featured
          title="Revanue"
          money={2.415}
          moneyRate={-11.5}
          desc="Compared to last month"
        />
        <Featured
          title="Sales"
          money={4.454}
          moneyRate={-1.4}
          desc="Compared to last month"
        />
        <Featured
          title="Cost"
          money={2.023}
          moneyRate={2.1}
          desc="Compared to last month"
        />
      </div>
      <div className="home__chart">
        <Chart
          title="User Analytics"
          data={userData}
          grid
          dataKeyVal="activeUser"
          dataKeyX="name"
        />
      </div>
      <div className="home__widgets">
        <WidgetLf />
        <WidgetR />
      </div>
    </div>
  );
};

export default Home;
