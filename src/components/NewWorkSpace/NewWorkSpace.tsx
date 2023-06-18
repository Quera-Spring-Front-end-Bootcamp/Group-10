import { useState } from "react";

import Card from "../ui/Card";
import GetWorkSpaceColor from "./GetWorkSpaceColor";
import ReviewWorkSpace from "./ReviewWorkSpace";
import GetWorkSpaceName, {
  NewTaskStepOneFormDataType,
} from "./GetWorkSpaceName";
import { Dialog } from "@headlessui/react";
import Button from "../ui/Button";
import PlusIcon from "../icons/PlusIcon";

type Props = {
  onClose?: () => void;
  onComplete?: () => void;
};

const taskPanel = [
  { id: 1, title: "ساختن ورک اسپیس جدید" },
  { id: 2, title: "انتخاب رنگ وک اسپیس" },
  { id: 3, title: "مرور اطلاعات" },
];

function NewWorkSpace({ onComplete, onClose }: Props) {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setStep(1);
    setName("");
    setColor("");
    if (onClose) {
      onClose();
    }
  }

  function handleBackClick() {
    if (step > 1) {
      setStep(step - 1);
    } else {
      handleClose();
    }
  }

  function handleSubmitStepOne(data: NewTaskStepOneFormDataType) {
    setName(data.name);
    setStep(2);
  }

  function handleSubmitStepTwo(data: string) {
    setColor(data);
    setStep(3);
  }
  function handleSubmitStepThree() {
    if (onComplete) {
      onComplete();
    }
  }

  return (
    <>
      <Button
        className="!py-1 !bg-gray-semi-light flex items-center justify-center mt-3"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <PlusIcon className="stroke-black" />
        <span className="text-black text-sm">ساخت اسپیس جدید</span>
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel>
            <div className="w-[510px]">
              <Card
                onClose={() => setIsOpen(false)}
                onBack={step === 1 ? undefined : handleBackClick}
                title={taskPanel[step - 1].title}
                className="m-0"
              >
                <div className="mt-[40px] flex justify-start px-1">
                  {step === 1 && (
                    <GetWorkSpaceName onSubmit={handleSubmitStepOne} />
                  )}
                  {step === 2 && (
                    <GetWorkSpaceColor
                      title={name}
                      onSubmit={handleSubmitStepTwo}
                    />
                  )}
                  {step === 3 && (
                    <ReviewWorkSpace
                      name={`${name}`}
                      color={`${color}`}
                      onSubmit={handleSubmitStepThree}
                    />
                  )}
                </div>
              </Card>
              <div className="flex justify-center items-end flex-row-reverse">
                {taskPanel.map((item, index) => {
                  return (
                    <span
                      key={item.id}
                      className={`w-2 h-2 mt-[40px] mx-2 rounded-full ${
                        step === index + 1 ? "bg-white" : "bg-[#8A8989]"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default NewWorkSpace;
