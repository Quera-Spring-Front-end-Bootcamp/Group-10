import { useState } from "react";

import Card from "./Card";
import WorkSpaceColor from "./WorkSpaceColor";
import Review from "./Review";
import NewTaskInput, { NewTaskStepOneFormDataType } from "./NewTaskInput";

type Props = {
  onClose?: () => void;
  onComplete?: () => void;
};

const taskPanel = [
  { id: 1, title: "ساختن ورک اسپیس جدید" },
  { id: 2, title: "انتخاب رنگ وک اسپیس" },
  { id: 3, title: "مرور اطلاعات" },
];

function WorkTask({ onComplete, onClose }: Props) {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [color, setColor] = useState("");

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
    <div className="w-[510px]">
      <Card
        close={close}
        back={handleBackClick}
        title={taskPanel[step - 1].title}
        className="m-0"
      >
        <div className="mt-[40px] flex justify-start px-1">
          {step === 1 && <NewTaskInput onSubmit={handleSubmitStepOne} />}
          {step === 2 && (
            <WorkSpaceColor title={name} onSubmit={handleSubmitStepTwo} />
          )}
          {step === 3 && (
            <Review
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
  );
}

export default WorkTask;
