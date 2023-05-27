import React, { useState, PropsWithChildren } from "react";
import Modal from "./Modal";
import Button from "./Button";
import AddIcon from "../icons/AddIcon";
import TextInput from "./TextInput";
import Card from "./Card";
import WorkSpaceColor from "./WorkSpaceColor";
import Review from "./Review";

interface Props
  extends PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {
  title?: any;
}

const taskPanel = [
  { id: 1, title: "ساختن ورک اسپیس جدید" },
  { id: 2, title: "انتخاب رنگ وک اسپیس" },
  { id: 3, title: "مرور اطلاعات" },
];

function WorkTask({ title = taskPanel, className, children, ...props }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(1);

  const [name , setName] = useState('')
  const [color , setColor] = useState('')
  const [member , setMember] = useState('')

  return (
    <>
      <Button
        className={`flex justify-center items-center w-full !bg-[#D3D3D3]`}
        onClick={() => setModalOpen(!modalOpen)}
      >
        <AddIcon className={`stroke-black`} />
        <p className="text-black mr-2">ساختن اسپیس جدید</p>
      </Button>

      <Modal open={modalOpen} onClose={() => {}}>
        <div className="w-[505px]">
          <div className="flex transition-all duration-700 ease-in-out">
            {taskPanel.map(({ id, title }) => (
              <Card
                close={() => {
                  setModalOpen(!modalOpen);
                  setCurrentCard(1);
                  setName('')
                  setColor('')
                  setMember('')
                }}
                back={currentCard === 1 ? undefined : () => setCurrentCard((current) => current - 1)}
                key={id}
                title={`${title}`}
                className={`${currentCard === id ? "z-10" : "-z-10"} ${
                  currentCard === id ? "" : "hidden"
                } w-full m-0`}
              >
                <div
                  className={`mt-[40px] flex justify-start px-1 ${
                    currentCard === taskPanel.length && "border border-gray rounded-md p-5"
                  }`}
                >
                  {currentCard === 1 && (<TextInput onChange={(e) => {setName(e.target.value)}} label="نام ورک اسپیس" containerClassName="w-full" className=" !w-full mt-2" />)}
                  {currentCard === 2 && (<WorkSpaceColor onSelect={(e) => setColor(e)}/>)}
                  {currentCard === 3 && (<Review name={`${name}`} color={`${color}`}/>)}
                </div>
                <Button
                  className="w-11/12 mt-[60px]"
                  onClick={() => {
                    if (currentCard !== taskPanel.length) {
                      setCurrentCard((s) => s + 1);
                    } else {
                    }
                  }}
                >
                  {currentCard === taskPanel.length ? "ساختن ورک اسپیس" : "ادامه"}
                </Button>
              </Card>
            ))}
          </div>
          <div className="flex justify-center items-end flex-row-reverse">
            {taskPanel.map(({ id }) => (
              <span
                key={id}
                className={`w-2 h-2 mt-[40px] mx-2 rounded-full ${
                  currentCard === id ? "bg-white" : "bg-[#8A8989]"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default WorkTask;
