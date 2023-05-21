import React, { useState } from "react";
import Button from "@mui/material/Button";
import { DatePicker } from "antd";

const DatePickerComponent = () => {
  const [date, setDate] = useState(null);

  const handleChange = (date, dateString) => {
    setDate(date, dateString);
  };

  const handleClick = () => {
    console.log(date);
  };
  return (
    <div className="flex flex-col items-center justify-between gap-6">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <DatePicker onChange={handleChange} />
      <Button onClick={handleClick} variant="contained">
        Log Date
      </Button>
    </div>
  );
};

export default DatePickerComponent;
