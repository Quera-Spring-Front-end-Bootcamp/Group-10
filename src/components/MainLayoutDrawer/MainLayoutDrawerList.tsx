import { Disclosure } from "@headlessui/react";
import ListItem from "../ListItem";

type MainLayoutDrawerListSubProject = {
  id: number;
  title: string;
};

type MainLayoutDrawerList = {
  id: number;
  title: string;
  color: string;
  subProjects: MainLayoutDrawerListSubProject[];
};

const tempProjects: MainLayoutDrawerList[] = [
  {
    id: 1,
    title: "درس مدیریت پروژه",
    color: "bg-[#ff0000]",
    subProjects: [
      {
        id: 1,
        title: "درس 1",
      },
      {
        id: 2,
        title: "درس 2",
      },
      {
        id: 3,
        title: "درس 2",
      },
      {
        id: 4,
        title: "درس 2",
      },
    ],
  },
  {
    id: 2,
    title: "کارهای شخصی",
    color: "bg-[#00ff00]",
    subProjects: [
      {
        id: 5,
        title: "کارهای شخصی 1",
      },
      {
        id: 6,
        title: "کارهای شخصی 1",
      },
      {
        id: 7,
        title: "کارهای شخصی 1",
      },
      {
        id: 8,
        title: "کارهای شخصی 1",
      },
      {
        id: 9,
        title: "کارهای شخصی 1",
      },
      {
        id: 10,
        title: "کارهای شخصی 1",
      },
      {
        id: 11,
        title: "کارهای شخصی 1",
      },
      {
        id: 11,
        title: "کارهای شخصی 1",
      },
      {
        id: 11,
        title: "کارهای شخصی 1",
      },
    ],
  },
];

function MainLayoutDrawerList() {
  return (
    <div className="flex flex-col mt-4 gap-2 overflow-auto">
      {tempProjects.map(({ id, title, color, subProjects }) => (
        <Disclosure key={id}>
          <Disclosure.Button className="py-2 text-right flex items-center gap-2">
            <div className={`w-5 h-5 rounded-md ${color}`} />
            {title}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 pr-7 flex gap-3 flex-col">
            {subProjects.map((subProject) => {
              return (
                <ListItem
                  key={subProject.id}
                  id={subProject.id}
                  title={subProject.title}
                  to={`/projects/${subProject.id}`}
                />
              );
            })}
          </Disclosure.Panel>
        </Disclosure>
      ))}
    </div>
  );
}

export default MainLayoutDrawerList;
