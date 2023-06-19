import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"; // needed for dayClick
import faLocale from "@fullcalendar/core/locales/fa";
import listPlugin from "@fullcalendar/list";
import "./style.css";
import { Menu, Popover } from "@headlessui/react";
import PlusIcon from "../icons/PlusIcon";
import Card from "../ui/Card";
import CloseIcon from "../icons/CloseIcon";

function Calendar() {
  function handleDateClick(arg: DateClickArg) {
    console.log(arg);

    // bind with an arrow function
    alert(arg.dateStr);
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      headerToolbar={false}
      locale={faLocale}
      contentHeight="700px"
      fixedWeekCount={false}
      dayCellClassNames="relative right-0"
      weekNumberClassNames={"text-red-100"}
      // dateClick={handleDateClick}
      firstDay={6}
      dayCellContent={(props) => {
        return (
          <div className="bg-red-400">
            <span>{props.dayNumberText}</span>
            <Popover className="relative top-16">
              <Popover.Button className="bg-primary invisible add-button">
                <PlusIcon className="stroke-white" />
              </Popover.Button>

              <Popover.Panel className="absolute z-50 mt-4">
                <Card className="border-primary border bg-white flex w-[400px]">
                  <div className="flex flex-row flex-1">
                    <button>
                      <CloseIcon className="stroke-gray" />
                    </button>
                    <input
                      onClick={() => console.log(11)}
                      className="flex-1 bg-red-400 z-50"
                      placeholder="salam"
                    />
                  </div>
                </Card>
              </Popover.Panel>
            </Popover>
          </div>
        );
      }}

      // datesSet={(args) => useContext?.setItem(args.view.title)}
    />
  );
}

export default Calendar;
