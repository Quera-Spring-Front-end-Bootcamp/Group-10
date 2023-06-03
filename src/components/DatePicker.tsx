import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

export default function DatePicker() {
  function MyPlugin({ state, setState, calendar, locale, format }: any) {
    function handleAddDate(numberOfDaysFromNow: number) {
      const aa = new DateObject({ calendar, locale, format });
      console.log([...state.selectedDate, aa]);

      // const date = new Date();
      // date.setDate(date.getDate() + numberOfDaysFromNow);
      setState({
        ...state,
        selectedDate: [...state.selectedDate, aa],
      });
    }
    return (
      <div className="w-[200px]">
        <button
          className="flex w-full items-center justify-end"
          onClick={() => handleAddDate(0)}
        >
          امروز
        </button>
      </div>
    );
  }
  return (
    <Calendar
      calendar={persian}
      locale={persian_fa}
      multiple
      plugins={[<MyPlugin />]}
    />
  );
}
