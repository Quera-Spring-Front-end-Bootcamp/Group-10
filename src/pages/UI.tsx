import { useState } from "react";
import DatePicker from "../components/DatePicker";

function UI() {
  const [value, setValue] = useState<string>("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    // console.log(11);
  }
  return (
    <div className="bg-red-200 v-screen h-screen">
      <DatePicker />
      <input onChange={handleChange} value={value} />
    </div>
  );
}

export default UI;
