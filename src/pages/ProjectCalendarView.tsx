import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
// import { Popover } from "@headlessui/react";
// import interactionPlugin from "@fullcalendar/interaction";

function CustomCell(props: any) {
  const { date } = props;

  // Customize the contents of the cell based on the date
  const content = date.getDate();

  return (
    <div className="bg-red-400 w-full">
      <div>{content}</div>
    </div>
  );
}

function ProjectCalendarView() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, momentTimezonePlugin]}
        initialView="dayGridMonth"
        locale="fa"
        direction="rtl"
        firstDay={6}
        headerToolbar={false}
        timeZone="Asia/Tehran"
        dayCellContent={CustomCell}
        // dayCellContent={(day) => {
        //   return (
        //     <Popover className="relative h-full block">
        //       {day.date.getDate().toString()}
        //       <Popover.Button className={"relative bottom-0 right-0"}>
        //         salam
        //       </Popover.Button>

        //       <Popover.Panel className="absolute z-10">
        //         <div className="grid grid-cols-2">
        //           <a href="/analytics">Analytics</a>
        //           <a href="/engagement">Engagement</a>
        //           <a href="/security">Security</a>
        //           <a href="/integrations">Integrations</a>
        //         </div>

        //         <img src="/solutions.jpg" alt="" />
        //       </Popover.Panel>
        //     </Popover>
        //   );
        // }}
      />
    </div>
  );
}

export default ProjectCalendarView;
