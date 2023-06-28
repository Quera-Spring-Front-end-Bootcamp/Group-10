import Avatar from "../ui/Avatar";
import ProfileImage from "../../assets/react.svg";
import PiriorityIcon from "../icons/PiriorityIcon";
import TextLineIcon from "../icons/TextLineIcon";

function SectionThreeRowOne({bodyInfo}:any) {
    return (
        <div className="w-full flex cursor-pointer">
           <div className="flex justify-center items-center px-2 ml-auto">
              <div className="w-4 h-4 bg-green-600 rounded-md"></div>
              <p className="text-md font-medium pr-2">
                  {bodyInfo.boards[2].tasks[0].name}
              </p>
           </div>
          <div className="w-[62%] flex justify-center items-center">
            <div className="w-full flex justify-between items-center pl-16">
              <div className="relative mr-10">
                 <Avatar
                   src={ProfileImage}
                   alt="user image..."
                   className="absolute top-0 right-5"
                  />
                  <Avatar src={ProfileImage} alt="user image..." />
                </div>
                    <p className="text-xs">
                    {bodyInfo.boards[2].tasks[0].deadline}
                    </p>
                    <PiriorityIcon className="stroke-red-600" />
                    <TextLineIcon className="stroke-gray" />            
            </div>
          </div>
        </div>
    )
}

export default SectionThreeRowOne;