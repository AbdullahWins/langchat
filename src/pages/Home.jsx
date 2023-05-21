import React from "react";
import Button from "@mui/material/Button";
import { DatePicker } from "antd";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="contained">Hello World</Button>
      <DatePicker />
    </div>
  );
};

export default Home;
