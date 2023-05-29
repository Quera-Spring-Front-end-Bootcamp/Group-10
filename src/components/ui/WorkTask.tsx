import React, { useState, PropsWithChildren } from "react";
import Modal from "./Modal";
import Button from "./Button";
import AddIcon from "../icons/AddIcon";
import TextInput from "./TextInput";
import Card from "./Card";
import WorkSpaceColor from "./WorkSpaceColor";
import Review from "./Review";
import NewTaskInput from "./NewTaskInput";

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

  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [member, setMember] = useState("");

  const close = () => {
    setModalOpen(!modalOpen);
    setCurrentCard(1);
    setName("");
    setColor("");
    setMember("");
  };

  const handelName = (Entername: string) => {
    setName(Entername);
  };

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
                close={close}
                back={currentCard === 1 ? undefined : () => setCurrentCard((current) => current - 1)}
                key={id}
                title={`${title}`}
                className={`${currentCard === id ? "z-10" : "-z-10"} ${
                  currentCard === id ? "" : "hidden"
                } w-full m-0`}
              >
                <div className={`mt-[40px] flex justify-start px-1 `}>
                  {currentCard === 1 && (
                    <NewTaskInput
                      setName={handelName}
                      action={() => {
                        setCurrentCard((s) => s + 1);
                      }}
                    />
                  )}
                  {currentCard === 2 && (
                    <WorkSpaceColor
                      name={name}
                      onSelect={(e) => setColor(e)}
                      action={() => setCurrentCard((s) => s + 1)}
                    />
                  )}
                  {currentCard === 3 && (
                    <Review
                      name={`${name}`}
                      color={`${color}`}
                      action={() =>
                        currentCard !== taskPanel.length ? setCurrentCard((s) => s + 1) : close()
                      }
                    />
                  )}
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center items-end flex-row-reverse">
            {
              <span
                className={`w-2 h-2 mt-[40px] mx-2 rounded-full ${
                  currentCard === 1 ? "bg-white" : "bg-[#8A8989]"
                }`}
              ></span>
            }
            {
              <span
                className={`w-2 h-2 mt-[40px] mx-2 rounded-full ${
                  currentCard === 2 ? "bg-white" : "bg-[#8A8989]"
                }`}
              ></span>
            }
            {
              <span
                className={`w-2 h-2 mt-[40px] mx-2 rounded-full ${
                  currentCard === 3 ? "bg-white" : "bg-[#8A8989]"
                }`}
              ></span>
            }
          </div>
        </div>
      </Modal>
    </>
  );
}

export default WorkTask;
