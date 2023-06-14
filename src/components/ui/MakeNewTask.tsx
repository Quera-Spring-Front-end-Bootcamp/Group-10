import TagBoxList from "./TagBoxList";

import CheckProfileIcon from "../icons/CheckProfileIcon";
import CloseIcon from "../icons/CloseIcon";
import LinkIcon from "../icons/LinkIcon";

function MakeNewTask(): JSX.Element {
  return (
    <div className="w-full h-full ml-auto p-20">
      <div className="w-full relative flex flex-col shadow-lg shadow-zinc-400 rounded-2xl p-6">
        <div className="flex justify-center items-center mb-10">
          <div className="w-4 h-4 bg-slate-300 rounded-sm ml-3"></div>
          <h2 className="ml-auto text-2xl font-medium">عنوان تسک</h2>
          <CloseIcon className="stroke-slate-500" />
        </div>
        <div className="flex justify-start items-center mb-10">
          <p className="text-base font-medium">در</p>
          <p className="text-base font-normal border-solid border border-slate-300 rounded-md py-1 pr-2 pl-8 mx-2">
            پروژه اول
          </p>
          <p className="text-base font-medium ml-2">برای</p>
          <CheckProfileIcon className="stroke-gray border-dotted border-2 border-slate-300 rounded-full w-8 h-8 p-1" />
        </div>
        <div className="flex justify-start items-start mb-10">
          <textarea
            rows={5}
            className="w-full border-solid border border-slate-300 rounded-md px-4 py-2 placeholder focus:outline-none"
            placeholder="توضیحاتی برای این تسک بنویسید"
          />
        </div>
        <div className="flex justify-start items-center mb-10">
          <p className="text-base font-medium ml-4">افزودن پیوست</p>
          <div className="flex border-solid border border-teal-500 rounded-md px-2 py-1">
            <LinkIcon />
            <p className="text-base font-normal pr-2">آپلود فایل</p>
          </div>
        </div>
        <TagBoxList />
      </div>
    </div>
  );
}

export default MakeNewTask;
