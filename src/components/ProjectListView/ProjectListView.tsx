import { Disclosure } from '@headlessui/react'
import ArrowTopIcon from '../icons/ArrowTopIcon';
import ProjectTabOne from './ProjectTabOne';

type Root = {
  _id: string,
  boards: [
    {
      _id: string,
      name: string,
      position: number,
      project: string,
      tasks: [
        {
          _id: string,
          board: string,
          comments: [],
          description: string,
          label: [],
          name: string,
          position: number,
          taskAssigns: string[],
          taskTags: [],
          deadline: string,
        },
      ],
    },
    { _id: string, name: string, position: number, project: string, tasks: [] },
    { _id: string, name: string, position: number, project: string, tasks: [] },
  ],
  members: [],
  name: string,
  workspace: string,
};
const project: Root = {
  _id: "1",
  boards: [
    {
      _id: "1",
      name: "pending",
      position: 4,
      project: "dwa",
      tasks: [
        {
          _id: "1",
          board: "s",
          comments: [],
          description: "",
          label: [],
          name: "این یک تیتر برای این تسک است.",
          position: 4,
          taskAssigns: ["dwa", "dwa", "dwa"],
          taskTags: [],
          deadline: "6 آبان",
        },
      ],
    },
    { _id: "1", name: "in progress", position: 4, project: "dwa", tasks: [] },
    { _id: "1", name: "done", position: 4, project: "dwa", tasks: [] },
  ],
  members: [],
  name: "پروژه اول",
  workspace: "namanam",
};


function ProjectListView(){
    return(
      <div className="p-10">
       <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex flex-row justify-center items-center text-lg font-bold">
              <ArrowTopIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 border rounded-full stroke-black ml-2`}
              />
                {project.name}
            </Disclosure.Button>
            <Disclosure.Panel>
                <ProjectTabOne />
            </Disclosure.Panel>
          </>
        )}
       </Disclosure>
      </div>
  
    )
}

export default ProjectListView;

