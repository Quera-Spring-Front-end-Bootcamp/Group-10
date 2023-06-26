import { Disclosure } from '@headlessui/react'
import ArrowTopIcon from '../icons/ArrowTopIcon';
import ProjectHeadRowOne from './TabHeadRowOne';
import TabBodyRowOne from './TabBodyRowOne';


function ProjectTabOne(){

    return(
        
       <div className="w-full px-4 pt-4">
        <div className="mx-auto w-full rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-start rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <ArrowTopIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 border rounded-full stroke-black`}
                  />
                  <ProjectHeadRowOne/>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <TabBodyRowOne/>
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <ArrowTopIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 border rounded-full stroke-black`}
                  />
                  <span>Do you offer technical support?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  No.
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <ArrowTopIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 border rounded-full stroke-black`}
                  />
                  <span>Do you offer support?</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Yes.
                </Disclosure.Panel>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Yes.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    )
}

export default ProjectTabOne;