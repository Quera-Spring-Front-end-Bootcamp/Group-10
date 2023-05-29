import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Card from "./ui/Card";

export default function DatePicker() {
  return (
    <Calendar
      calendar={persian}
      locale={persian_fa}
      className="w-[500px] [&.rmdp-calendar]:w-full"
    />
  );
}
