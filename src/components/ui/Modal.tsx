import { Dialog, Transition } from "@headlessui/react";
import React, { PropsWithChildren } from "react";
import { Fragment, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import IconButton from "./IconButton";
import BackIcon from "../icons/BackIcon";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  title?: string;
  button_title?: string;
  exit?: () => void;
  back?: () => void;
}

export default function MyModal({ title, exit, back, button_title, children, className, ...props }: Props) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-opacity-20 px-4 py-2 text-[16px] font-medium text-[#1E1E1E] hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {button_title}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="div" className="text-lg text-center font-medium leading-6 text-gray-900">
                    {
                      <div className="grid grid-flow-col  ">
                        <div className="flex justify-start cursor-pointer text-gray">
                          {exit ? <IconButton action={exit} Src={CloseIcon} /> : ""}
                        </div>
                        <div className="justify-self-center font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl">
                          {title && <p>{title}</p>}
                        </div>

                        <div className="flex justify-end text-left cursor-pointer text-gray">
                          {back ? <IconButton action={back} Src={BackIcon} /> : ""}
                        </div>
                      </div>
                    }
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
