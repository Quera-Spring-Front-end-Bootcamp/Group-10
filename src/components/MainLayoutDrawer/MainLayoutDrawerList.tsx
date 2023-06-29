import { Disclosure } from "@headlessui/react";
import ListItem from "../ListItem";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

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

function MainLayoutDrawerList() {
  const workspaces = useSelector((state: RootState) => state.workSpace);

  return (
    <div className="flex flex-col mt-4 gap-2 overflow-auto">
      {workspaces.map(({ _id, name, projects }) => (
        <Disclosure key={_id}>
          <Disclosure.Button className="py-2 text-right flex items-center gap-2">
            <div className={`w-5 h-5 rounded-md bg-[#ff0000]`} />
            {name}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 pr-7 flex gap-3 flex-col">
            {projects.map((subProject) => {
              return (
                <ListItem
                  key={subProject._id}
                  id={subProject._id}
                  title={subProject.name}
                  to={`/projects/${subProject._id}`}
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
