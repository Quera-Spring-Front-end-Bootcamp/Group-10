import { useState } from "react";
import ArrowBottomIcon from "../icons/ArrowBottomIcon";
import Avatar from "./Avatar";
import ProfileImage from "../../assets/react.svg";
import TextLineIcon from "../icons/TextLineIcon";
import PiriorityIcon from "../icons/PiriorityIcon";

function Tab(): JSX.Element {
  const [isOpenOne, setIsOpenOne] = useState<boolean>(true);
  const [isOpenTwo, setIsOpenTwo] = useState<boolean>(true);

  const toggleTabOne = () => {
    setIsOpenOne(!isOpenOne);
  };
  const toggleTabTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-start p-10 bg-slate-100">
      <div className="flex justify-start items-center py-6">
        <ArrowBottomIcon className="stroke-black" />
        <h1 className="text-xl font-semibold pr-3">پروژه اول</h1>
      </div>
      <div className="flex flex-col justify-start items-start relative">
        <div className="flex justify-center items-center bg-transparent gap-2 px-10 absolute top-0 right-0">
          <ArrowBottomIcon
            onClick={toggleTabOne}
            className="stroke-black cursor-pointer"
          />
          <p className="bg-pink-600 text-base font-medium text-white text-center rounded-lg p-1">
            Pending
          </p>
          <p className="text-xs text-center p-1 ml-auto">2 تسک</p>
        </div>
        {isOpenOne && (
          <div className="w-full flex flex-col justify-start items-center">
            <div className="w-full flex justify-end items-center pb-6 mt-2">
              <div className="w-[60%] flex justify-around items-center pl-8">
                <p className="text-base font-medium">اعضا</p>
                <p className="text-base font-medium">ددلاین</p>
                <p className="text-base font-medium">اولویت</p>
                <p className="text-base font-medium">توضیحات</p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center px-16 mb-4">
              <div className="w-full flex justify-start items-center bg-white rounded-md h-12">
                <div className="flex justify-center items-center">
                  <div className="w-4 h-4 bg-pink-600 rounded-md"></div>
                  <p className="text-md font-medium pr-2">
                    این یک تیتر برای این تسک است.
                  </p>
                </div>
                <div className="w-[63%] flex justify-center items-center mr-auto">
                  <div className="w-full flex justify-around items-center">
                    <div className="relative">
                      <Avatar
                        src={ProfileImage}
                        alt="user image..."
                        className="absolute top-0 right-5"
                      />
                      <Avatar src={ProfileImage} alt="user image..." />
                    </div>
                    <p className="text-xs">6 آبان</p>
                    <PiriorityIcon className="stroke-red-600" />
                    <TextLineIcon className="stroke-gray" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center px-16">
              <div className="w-full flex justify-start items-center bg-white rounded-md h-12">
                <div className="flex justify-center items-center">
                  <div className="w-4 h-4 bg-pink-600 rounded-md"></div>
                  <p className="text-md font-medium pr-2">
                    این یک تیتر برای این تسک است.
                  </p>
                </div>
                <div className="w-[63%] flex justify-center items-center mr-auto">
                  <div className="w-full flex justify-around items-center">
                    <div className="relative">
                      <Avatar src={ProfileImage} alt="user image..." />
                    </div>
                    <p className="text-xs">6 آبان</p>
                    <PiriorityIcon className="stroke-red-600" />
                    <TextLineIcon className="stroke-gray" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center my-12 px-6">
        <div className="flex justify-start items-center bg-transparent gap-2 px-10">
          <p className="w-24 bg-orange-600 text-base font-medium text-white text-center rounded-lg p-1">
            In Progress
          </p>
          <p className="w-12 text-xs p-1 ml-auto">2 تسک</p>
        </div>
        <div className="w-full flex justify-start items-center">
          <div className="w-full flex justify-end items-center">
            <div className="w-[76%] flex justify-around items-center">
              <p className="text-base font-medium">اعضا</p>
              <p className="text-base font-medium">ددلاین</p>
              <p className="text-base font-medium">اولویت</p>
              <p className="text-base font-medium">توضیحات</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start relative">
        <div className="flex justify-center items-center bg-transparent gap-2 px-10 absolute top-0 right-0">
          <ArrowBottomIcon
            onClick={toggleTabTwo}
            className="stroke-black cursor-pointer"
          />
          <p className="bg-green-600 text-base font-medium text-white text-center rounded-lg p-1">
            Done
          </p>
          <p className="text-xs text-center p-1 ml-auto">2 تسک</p>
        </div>
        {isOpenTwo && (
          <div className="w-full flex flex-col justify-start items-center">
            <div className="w-full flex justify-end items-center pb-6 mt-2">
              <div className="w-[61%] flex justify-around items-center pl-8">
                <p className="text-base font-medium">اعضا</p>
                <p className="text-base font-medium">ددلاین</p>
                <p className="text-base font-medium">اولویت</p>
                <p className="text-base font-medium">توضیحات</p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center px-16 mb-4">
              <div className="w-full flex justify-start items-center bg-white rounded-md h-12">
                <div className="flex justify-center items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-md"></div>
                  <p className="text-md font-medium pr-2">
                    این یک تیتر برای این تسک است.
                  </p>
                </div>
                <div className="w-[63%] flex justify-center items-center mr-auto">
                  <div className="w-full flex justify-around items-center">
                    <div className="relative">
                      <Avatar
                        src={ProfileImage}
                        alt="user image..."
                        className="absolute top-0 right-5"
                      />
                      <Avatar src={ProfileImage} alt="user image..." />
                    </div>
                    <p className="text-xs">6 آبان</p>
                    <PiriorityIcon className="stroke-red-600" />
                    <TextLineIcon className="stroke-gray" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center px-16">
              <div className="w-full flex justify-start items-center bg-white rounded-md h-12">
                <div className="flex justify-center items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-md"></div>
                  <p className="text-md font-medium pr-2">
                    این یک تیتر برای این تسک است.
                  </p>
                </div>
                <div className="w-[63%] flex justify-center items-center mr-auto">
                  <div className="w-full flex justify-around items-center">
                    <div className="relative">
                      <Avatar src={ProfileImage} alt="user image..." />
                    </div>
                    <p className="text-xs">6 آبان</p>
                    <PiriorityIcon className="stroke-red-600" />
                    <TextLineIcon className="stroke-gray" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tab;
