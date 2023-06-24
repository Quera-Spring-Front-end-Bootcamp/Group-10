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
      // dayCellClassNames="relative right-0"
      // weekNumberClassNames={"text-red-100"}
      // dateClick={handleDateClick}
      firstDay={6}
      dayCellContent={(props) => {
        return (
          <div className="flex justify-between">
            <Popover className="relative">
              <Popover.Button className="bg-primary rounded-md">
                <PlusIcon className="stroke-white" />
              </Popover.Button>

              <Popover.Panel focus className="absolute">
                <Card className="border-primary border h-[300px] bg-white flex flex-col w-[400px] !p-3">
                  <div className="flex flex-1">
                    <button>
                      <CloseIcon
                        className="stroke-gray w-10 h-10"
                        tabIndex={100}
                      />
                    </button>
                    <input
                      className="flex-1 focus:outline-none"
                      placeholder="نام تسک را وارد کنید."
                      tabIndex={1}
                    />
                  </div>
                </Card>

                <img src="/solutions.jpg" alt="" />
              </Popover.Panel>
            </Popover>
            <span className="-z-50">{props.dayNumberText}</span>
          </div>
        );
      }}
    />
  );
}

export default Calendar;
