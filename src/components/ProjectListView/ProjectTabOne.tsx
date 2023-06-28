import { Disclosure } from '@headlessui/react'
import ArrowTopIcon from '../icons/ArrowTopIcon';
import ProjectHeadRowOne from './TabHeadRowOne';
import TabBodyRowOne from './TabBodyRowOne';
import TabBodyRowTwo from './TabBodyRowTwo';
import SectionTwoHead from './SectionTwoHead';
import SectionTwoRowOne from './SectionTwoRowOne';
import SectionTwoRowTwo from './SectionTwoRowTwo';
import SectionThreeHead from './SectionThreeHead';
import SectionThreeRowOne from './SectionThreeRowOne';
import SectionThreeRowTwo from './SectionThreeRowTwo';


function ProjectTabOne({projectInfo}: any): JSX.Element{

    return(
        
       <div className="w-full px-4 pt-4">
        <div className="mx-auto w-full rounded-2xl bg-transparent p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-center items-center rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium hover:bg-purple-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <ArrowTopIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 border rounded-full stroke-black`}
                  />
                  <ProjectHeadRowOne titleInfo={projectInfo}/>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-2 bg-white mb-2">
                  <TabBodyRowOne bodyInfo={projectInfo}/>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-2 pb-2 bg-white mb-2">
                  <TabBodyRowTwo bodyInfoTwo={projectInfo}/>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-center items-center rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium hover:bg-purple-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <ArrowTopIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 border rounded-full stroke-black`}
                  />
                  <SectionTwoHead titleInfo={projectInfo}/>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-2 bg-white mb-2">
                  <SectionTwoRowOne bodyInfo={projectInfo}/>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-2 pb-2 bg-white mb-2">
                  <SectionTwoRowTwo bodyInfoTwo={projectInfo}/>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-center items-center rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium hover:bg-purple-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <ArrowTopIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 border rounded-full stroke-black`}
                  />
                  <SectionThreeHead titleInfo={projectInfo}/>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-2 bg-white mb-2">
                  <SectionThreeRowOne bodyInfo={projectInfo}/>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-2 pb-2 bg-white mb-2">
                  <SectionThreeRowTwo bodyInfoTwo={projectInfo}/>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    )
}

export default ProjectTabOne;