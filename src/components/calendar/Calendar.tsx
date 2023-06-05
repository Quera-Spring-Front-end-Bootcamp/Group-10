import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; // needed for dayClick
import faLocale from "@fullcalendar/core/locales/fa";
import listPlugin from "@fullcalendar/list";
import { useContext } from "react";

function Calendar() {
  function handleDateClick(arg: DateClickArg) {
    // bind with an arrow function
    alert(arg.dateStr);
  }
  return (
    <div className="w-full mx-auto">
      <div className="pt-[25px]">
        <div className="bg-white ml-[50px]">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            dayCellContent={(props) => {
              return (
                <div className="w-full flex flex-col justify-between h-full ">
                  <div className="mt-auto flex justify-between bg-red-500">
                    <button className="bg-primary rounded-sm">+</button>
                    <div>{props.dayNumberText}</div>
                  </div>
                </div>
              );
            }}
            headerToolbar={false}
            locale={faLocale}
            contentHeight="700px"
            fixedWeekCount={false}
            dayCellClassNames="relative right-0"
            weekNumberClassNames={"text-red-100"}
            dateClick={handleDateClick}
            firstDay={6}
            // datesSet={(args) => useContext?.setItem(args.view.title)}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
